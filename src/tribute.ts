import { Ball } from "./ball"
import { Garment } from "./tribute/garment"
import { setUVs, setUVMirror, setUVsWide } from "./utils/utils"

@Component("uvData")
export class uvData {
  offset:  number = 0
  animationOffset: number = 0.02
  verticalStretch: number = 0
  horizontalStretch: number = 0
  u: number = 0 
  v: number = 0 
}

// Create component group
const uvPlaneEntities = engine.getComponentGroup(uvData)

export class animateUV implements ISystem {
    update() {
      for (let entity of uvPlaneEntities.entities){
        let plane = entity.getComponent(PlaneShape)
        let data = entity.getComponent(uvData)
        let newOffset = data.offset + data.animationOffset
        let u = data.u
        let v = data.v
        data.offset = newOffset
        plane.uvs = setUVs(u,v,newOffset,data.verticalStretch)
      }
    }
}

export class Tribute extends Entity {

    constructor(transform: Transform, parent: Entity) {
        super()
        this.addComponentOrReplace(transform)
        this.setParent(parent)

        const orange = new Entity('orange')
        engine.addEntity(orange)
        orange.setParent(this)
        const transform4 = new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1)
        })
        orange.addComponentOrReplace(transform4)
        const gltfShape2 = new GLTFShape("models/tribute/orange2.glb")
        gltfShape2.withCollisions = true
        gltfShape2.isPointerBlocker = true
        gltfShape2.visible = true
        orange.addComponentOrReplace(gltfShape2)

        // let logo: Entity = new Entity()
        // let logoShape: GLTFShape = new GLTFShape('models/tribute/running-storefront-logo.glb')
        
        // logo.addComponentOrReplace(logoShape)
        // logo.addComponentOrReplace(new Transform({
        //   position: new Vector3(0,0,0),
        //   rotation: Quaternion.Euler(0,0,0),
        //   scale: new Vector3(1,1,1)
        // }))
        // logo.setParent(orange)

        let logo = new Texture('materials/tributealpha2.png', { wrap: 1 })
        let logoAlphaTexture = new Texture('materials/tributealpha2.png', { wrap: 1 })
        let logoMaterial = new Material()
        logoMaterial.metallic = 0
        logoMaterial.roughness = 1
        logoMaterial.specularIntensity = 0
        logoMaterial.castShadows = false
        logoMaterial.albedoTexture = logo
        logoMaterial.emissiveTexture = logo
        logoMaterial.emissiveColor = new Color3(1,1,1)
        logoMaterial.alphaTexture = logoAlphaTexture

        let logoPlane = new Entity()
        logoPlane.setParent(orange)

        logoPlane.addComponentOrReplace(new uvData())
        // Set values on component
        logoPlane.getComponent(uvData).offset = 0
        logoPlane.getComponent(uvData).animationOffset = -0.005
        logoPlane.getComponent(uvData).verticalStretch = 0
        logoPlane.getComponent(uvData).u = 1
        logoPlane.getComponent(uvData).v = 1

        let plane = new PlaneShape()
        plane.withCollisions = false
        plane.uvs = setUVs(
            logoPlane.getComponent(uvData).u,
            logoPlane.getComponent(uvData).v,
            logoPlane.getComponent(uvData).offset,
            logoPlane.getComponent(uvData).verticalStretch
        )
        logoPlane.addComponentOrReplace(plane)
        logoPlane.addComponentOrReplace(logoMaterial)
        
        logoPlane.addComponentOrReplace(new Transform({
            position: new Vector3(0, 1.15, 4.5),
            rotation: Quaternion.Euler(0, 0, 0),
            scale: new Vector3(14, 9.64, 1),
        }))

        engine.addSystem(new animateUV())

        let wallTexture = new Texture("materials/textureExtra.png", { wrap: 1 })

        let wallEmissionColor = new Color3(0,1,1)

        const southWall = new Entity()
        southWall.setParent(orange)

        southWall.addComponentOrReplace(new uvData())
        // Set values on component
        southWall.getComponent(uvData).offset = 0
        southWall.getComponent(uvData).verticalStretch = 0
        southWall.getComponent(uvData).horizontalStretch = 0
        southWall.getComponent(uvData).u = 1
        southWall.getComponent(uvData).v = 2
        
        


        const southWallPlaneShape = new PlaneShape()
        const southWallMaterial = new Material()
        southWallMaterial.albedoTexture = wallTexture
        southWallMaterial.emissiveTexture = wallTexture
        southWallMaterial.emissiveColor = wallEmissionColor
        southWall.addComponentOrReplace(southWallMaterial)

        southWallPlaneShape.uvs = setUVs(
        southWall.getComponent(uvData).u,
        southWall.getComponent(uvData).v,
        southWall.getComponent(uvData).offset,
        southWall.getComponent(uvData).verticalStretch)

        southWallPlaneShape.withCollisions = true
        southWall.addComponentOrReplace(southWallPlaneShape)


        southWall.addComponentOrReplace(new Transform({
        position: new Vector3(0, 1.42215, -3.807155),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(16.2689, 2.8443, 1)
        }))

        const eastWall = new Entity()
        eastWall.setParent(orange)

        eastWall.addComponentOrReplace(new uvData())
        // Set values on component
        eastWall.getComponent(uvData).offset = 0
        eastWall.getComponent(uvData).verticalStretch = 0
        eastWall.getComponent(uvData).u = 1
        eastWall.getComponent(uvData).v = 2
        

        const eastWallPlaneShape = new PlaneShape()
        const eastWallMaterial = new Material()
        eastWallMaterial.albedoTexture = wallTexture
        eastWallMaterial.emissiveTexture = wallTexture
        eastWallMaterial.emissiveColor = wallEmissionColor
        eastWall.addComponentOrReplace(eastWallMaterial)

        eastWallPlaneShape.uvs = setUVs(
        eastWall.getComponent(uvData).u,
        eastWall.getComponent(uvData).v,
        eastWall.getComponent(uvData).offset,
        eastWall.getComponent(uvData).verticalStretch)
        
        eastWallPlaneShape.withCollisions = true
        eastWall.addComponentOrReplace(eastWallPlaneShape)

        eastWall.addComponentOrReplace(new Transform({
        position: new Vector3(-8.13445, 1.42215, -0.01),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(7.60407, 2.8443, 1)
        }))

        const westWall = new Entity()
        westWall.setParent(orange)

        westWall.addComponentOrReplace(new uvData())
        // Set values on component
        westWall.getComponent(uvData).offset = 0
        westWall.getComponent(uvData).verticalStretch = 0
        westWall.getComponent(uvData).u = 1
        westWall.getComponent(uvData).v = 2
        
        

        const westWallPlaneShape = new PlaneShape()
        const westWallMaterial = new Material()
        westWallMaterial.albedoTexture = wallTexture
        westWallMaterial.emissiveTexture = wallTexture
        westWallMaterial.emissiveColor = wallEmissionColor
        westWall.addComponentOrReplace(westWallMaterial)

        westWallPlaneShape.uvs = setUVs(
        westWall.getComponent(uvData).u,
        westWall.getComponent(uvData).v,
        westWall.getComponent(uvData).offset,
        westWall.getComponent(uvData).verticalStretch)
        
        westWallPlaneShape.withCollisions = true
        westWall.addComponentOrReplace(westWallPlaneShape)

        westWall.addComponentOrReplace(new Transform({
        position: new Vector3(8.13445, 1.42215, -0.01),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(7.60407, 2.8443, 1)
        }))

        const ceiling = new Entity()
        ceiling.setParent(orange)

        ceiling.addComponentOrReplace(new uvData())
        // Set values on component
        ceiling.getComponent(uvData).offset = 0
        ceiling.getComponent(uvData).verticalStretch = 0
        ceiling.getComponent(uvData).u = 1
        ceiling.getComponent(uvData).v = 2

        const ceilingPlaneShape = new PlaneShape()
        const ceilingMaterial = new Material()
        ceilingMaterial.albedoTexture = wallTexture
        ceilingMaterial.emissiveTexture = wallTexture
        ceilingMaterial.emissiveColor = wallEmissionColor
        ceiling.addComponentOrReplace(ceilingMaterial)

        ceilingPlaneShape.uvs = setUVs(
        ceiling.getComponent(uvData).u,
        ceiling.getComponent(uvData).v,
        ceiling.getComponent(uvData).offset,
        ceiling.getComponent(uvData).verticalStretch)
        
        ceilingPlaneShape.withCollisions = true
        ceiling.addComponentOrReplace(ceilingPlaneShape)


        ceiling.addComponentOrReplace(new Transform({
        position: new Vector3(0, 2.8443, -0.01),
        rotation: Quaternion.Euler(90, 0, 0),
        scale: new Vector3(16.2689, 7.60407, 1)
        }))

        const floor = new Entity()
        floor.setParent(orange)

        floor.addComponentOrReplace(new uvData())
        // Set values on component
        floor.getComponent(uvData).offset = 0
        floor.getComponent(uvData).verticalStretch = 0
        floor.getComponent(uvData).u = 1
        floor.getComponent(uvData).v = 2

        const floorPlaneShape = new PlaneShape()
        const floorMaterial = new Material()
        floorMaterial.albedoTexture = wallTexture
        floorMaterial.emissiveTexture = wallTexture
        floorMaterial.emissiveColor = wallEmissionColor
        floor.addComponentOrReplace(floorMaterial)

        floorPlaneShape.uvs = setUVs(
        floor.getComponent(uvData).u,
        floor.getComponent(uvData).v,
        floor.getComponent(uvData).offset,
        floor.getComponent(uvData).verticalStretch)
        
        floorPlaneShape.withCollisions = false
        floor.addComponentOrReplace(floorPlaneShape)


        floor.addComponentOrReplace(new Transform({
        position: new Vector3(0, 0, -0.01),
        rotation: Quaternion.Euler(-90, 0, 0),
        scale: new Vector3(16.2689, 7.60407, 1)
        }))

        // Create the ball zone
        const ballZone: Entity = new Entity()
        ballZone.setParent(orange)
        ballZone.addComponentOrReplace(new Transform({
        position: new Vector3(-8,0,-8)
        }))
        engine.addEntity(orange)

        const garments: {shape: GLTFShape, position: Vector3, scale: Vector3, link: string}[] = [
        {
            shape: new GLTFShape('models/tribute/hudatb.glb'),
            position: new Vector3(0, 0, 0),
            scale: new Vector3(0.7, 0.7, 0.7),
            link: 'https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:626464?tab=owners'
        },
        {
            shape: new GLTFShape('models/tribute/micav2tb.glb'),
            position: new Vector3(0, 0, 0),
            scale: new Vector3(0.6, 0.6, 0.6),
            link: 'https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:626332?tab=owners'
        },
        {
            shape: new GLTFShape('models/tribute/srnatb.glb'),
            position: new Vector3(0, 0.4, 0),
            scale: new Vector3(0.5, 0.5, 0.5),
            link: 'https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1106634?tab=details'
        }
        ]

        const ballInitialPositions: {x: number, y: number, z: number}[] = [
        {x: 2, y: 1, z:6},
        {x: 9, y: 2, z:8},
        {x: 10, y: 2, z:7},
        ]

        const balls: Ball[] = [] // Store balls
        const ballBodies: CANNON.Body[] = [] // Store ball bodies

        let forwardVector: Vector3 = Vector3.Forward().rotate(Camera.instance.rotation) // Camera's forward vector
        let vectorScale: number = 10

        //Create ball material and configure its fields
        const ballMaterial = new Material()
        ballMaterial.albedoColor = new Color4(0,0,1,0.3)
        ballMaterial.metallic = 0
        ballMaterial.roughness = 0

        // add initial velocity (slow)
        for (let i = 0; i < garments.length; i++) {

        const ball = new Ball(
            new Transform({
            position: new Vector3(
                ballInitialPositions[i].x, 
                ballInitialPositions[i].y, 
                ballInitialPositions[i].z),
            }),
            ballMaterial,
            ballZone
        )

        const garment = new Garment(
            garments[i].shape,
            new Transform({
            position: garments[i].position,
            scale: garments[i].scale
            }),
            ball
        )

        // Allow the player to click the ball
        ball.addComponentOrReplace(
            new OnPointerDown(
            (e) => {
                if (e.buttonId==0){
                openExternalURL(garments[i].link)
                }
                if (e.buttonId==1 && e.hit!=undefined){
                // Apply impulse based on the direction of the camera
                ballBodies[i].applyImpulse(
                    new CANNON.Vec3(forwardVector.z * vectorScale, forwardVector.y * vectorScale, forwardVector.x * vectorScale),
                    // Applies impulse based on the player's position and where they click on the ball
                    new CANNON.Vec3(e.hit.hitPoint.z, e.hit.hitPoint.y, e.hit.hitPoint.x) 
                )
                }
            },
            {
                button: ActionButton.ANY,
                showFeedback: true,
                hoverText: "Click to Buy, Press E to Kick",
                distance: 6
            },
            )
        )

        balls.push(ball)
        }

        // Setup our world
        const world: CANNON.World = new CANNON.World()
        world.gravity.set(0, 0, 0) // m/s²

        const groundPhysicsMaterial = new CANNON.Material("groundMaterial")
        const groundPhysicsContactMaterial = new CANNON.ContactMaterial(groundPhysicsMaterial, groundPhysicsMaterial, {
        friction: 0,
        restitution: 1,
        })
        world.addContactMaterial(groundPhysicsContactMaterial)

        // Invisible walls
        const wallShapeNS = new CANNON.Box(new CANNON.Vec3(16, 8, 1))
        const wallShapeEW = new CANNON.Box(new CANNON.Vec3(8, 8, 1))

        const wallNorth = new CANNON.Body({
        mass: 0,
        shape: wallShapeNS,
        material: groundPhysicsMaterial,
        position: new CANNON.Vec3(8, 4, 13),
        })
        world.addBody(wallNorth)

        const wallSouth = new CANNON.Body({
        mass: 0,
        shape: wallShapeNS,
        material: groundPhysicsMaterial,
        position: new CANNON.Vec3(8, 4, 3.2),
        })
        world.addBody(wallSouth)

        const wallWest = new CANNON.Body({
        mass: 0,
        shape: wallShapeEW,
        material: groundPhysicsMaterial,
        position: new CANNON.Vec3(-1, 4, 8),
        })
        wallWest.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2)
        world.addBody(wallWest)

        const wallEast = new CANNON.Body({
        mass: 0,
        shape: wallShapeEW,
        material: groundPhysicsMaterial,
        position: new CANNON.Vec3(17, 4, 8),
        })
        wallEast.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2)
        world.addBody(wallEast)

        // Create a ground plane and apply physics material
        const groundBody: CANNON.Body = new CANNON.Body({
        mass: 0, // mass == 0 makes the body static
        })
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2) // Reorient ground plane to be in the y-axis

        const groundShape: CANNON.Plane = new CANNON.Plane()
        groundBody.addShape(groundShape)
        groundBody.material = groundPhysicsMaterial
        world.addBody(groundBody)

        const ballPhysicsMaterial: CANNON.Material = new CANNON.Material("ballMaterial")
        const ballPhysicsContactMaterial = new CANNON.ContactMaterial(groundPhysicsMaterial, ballPhysicsMaterial, {
        friction: 0,
        restitution: 1,
        })
        world.addContactMaterial(ballPhysicsContactMaterial)

        // Create a ceiling plane and apply physics material
        const ceilingBody: CANNON.Body = new CANNON.Body({
        mass: 0, // mass == 0 makes the body static
        position: new CANNON.Vec3(0, 2.8443, 0),
        })
        ceilingBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), -Math.PI / 2) // Reorient ground plane to be in the y-axis

        const ceilingShape: CANNON.Plane = new CANNON.Plane()
        ceilingBody.addShape(ceilingShape)
        ceilingBody.material = groundPhysicsMaterial
        world.addBody(ceilingBody)

        world.addContactMaterial(ballPhysicsContactMaterial)

        // Create bodies to represent each of the balls
        for (let i = 0; i < balls.length; i++) {
        let ballTransform: Transform = balls[i].getComponent(Transform)

        const ballBody: CANNON.Body = new CANNON.Body({
            mass: 1, // kg
            position: new CANNON.Vec3(ballTransform.position.x, ballTransform.position.y, ballTransform.position.z), // m
            shape: new CANNON.Sphere(1), // m (Create sphere shaped body with a radius of 1)
        })

        ballBody.material = ballPhysicsMaterial // Add bouncy material to ball body
        ballBody.linearDamping = 0 // Round will keep translating even with friction so you need linearDamping
        ballBody.angularDamping = 0.8 // Round bodies will keep rotating even with friction so you need angularDamping

        world.addBody(ballBody) // Add body to the world
        ballBodies.push(ballBody)
        }

        const fixedTimeStep: number = 1.0 / 60.0 // seconds
        const maxSubSteps: number = 3

        class updateSystem implements ISystem {
        update(dt: number): void {
            // Instruct the world to perform a single step of simulation.
            // It is generally best to keep the time step and iterations fixed.
            world.step(fixedTimeStep, dt, maxSubSteps)

            // Position and rotate the balls in the scene to match their cannon world counterparts
            for (let i = 0; i < balls.length; i++) {
            balls[i].getComponent(Transform).position.copyFrom(ballBodies[i].position)
            balls[i].getComponent(Transform).rotation.copyFrom(ballBodies[i].quaternion)
            }

            // Update forward vector
            forwardVector = Vector3.Forward().rotate(Camera.instance.rotation)
            log("Forward Vector: ", forwardVector)
        }
        }

        engine.addSystem(new updateSystem())


    }



    

}

