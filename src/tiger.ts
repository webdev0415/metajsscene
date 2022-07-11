// // Tiger stuff


// Coordinates of path to patrol
const point1 = new Vector3(11, 0.03, 30)
const point2 = new Vector3(8, 0, 24)
const point3 = new Vector3(24, 0, 24)
const path: Vector3[] = [point1, point2, point3]

const TURN_TIME = 0.9

const tigerModel = new Entity('tigerModel')
const tigerShape = new GLTFShape("models/tiger-v1.glb")

// let tirgerAnimator = new Animator()
// // Add animator component to the entity
// tigerModel.addComponent(tirgerAnimator)

// // Instance animation clip object
// const clipWalk = new AnimationState("metarig.001Action.006")

// // Add animation clip to Animator component
// tirgerAnimator.addClip(clipWalk)
// clipWalk.play()

// tigerModel.addComponent(tigerShape)
// //tigerModel.setParent(_scene)
// const transform701 = new Transform({
//   position: new Vector3(11, 0.03, 30),
//   rotation: new Quaternion(0,-45,0,0),
//   scale: new Vector3(1, 1, 1.0000026226043701)
// })
// tigerModel.addComponentOrReplace(transform701)
// engine.addEntity(tigerModel)