import * as utils from '@dcl/ecs-scene-utils'

// Video leftScreen
const leftScreenTransform = new Entity()
leftScreenTransform.addComponent(new Transform({ position: new Vector3(0, 6.15, 5) }))
leftScreenTransform.getComponent(Transform).rotate(Vector3.Right(), -15)

const leftScreen = new Entity()
leftScreen.addComponent(new PlaneShape())
leftScreen.addComponent(new Transform({ 
    scale: new Vector3(4, 2, 1),
    position: new Vector3(3, 2, 31.3)
  }))
leftScreen.getComponent(Transform).rotate(Vector3.Up(), -180)
leftScreen.setParent(leftScreenTransform)

leftScreenTransform.getComponent(Transform).scale.setAll(0.625) // You can change the scale of the leftScreen here...
engine.addEntity(leftScreen)

const leftVideoClip = new VideoClip("https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrowazqkbot/b/hezi-work/o/jp-ecommerce-vid.mp4")
const leftVideoTexture = new VideoTexture(leftVideoClip)
leftVideoTexture.loop = false

const leftScreenMaterial = new Material()
leftScreenMaterial.albedoTexture = leftVideoTexture
leftScreenMaterial.emissiveTexture = leftVideoTexture
leftScreenMaterial.emissiveColor = Color3.White()
leftScreenMaterial.emissiveIntensity = 0.6
leftScreenMaterial.roughness = 1.0
leftScreen.addComponent(leftScreenMaterial)

// Video lazy loading
const leftVideoBox = new Entity()
let leftTriggerBox = new utils.TriggerBoxShape(new Vector3(7.1,5,7), new Vector3(5.1, 2, 28))
const leftVideoTriggerComponent = new utils.TriggerComponent(
  leftTriggerBox, //shape
  {
      onCameraEnter : () => {
        leftVideoTexture.play()
      },
      onCameraExit : () => {
        leftVideoTexture.pause()
      },
      enableDebug: false
  }
)
leftVideoBox.addComponent(leftVideoTriggerComponent)
engine.addEntity(leftVideoBox)

// Video rightScreen
const rightScreenTransform = new Entity()
rightScreenTransform.addComponent(new Transform({ position: new Vector3(0, 6.15, 5) }))
rightScreenTransform.getComponent(Transform).rotate(Vector3.Right(), -15)

const rightScreen = new Entity()
rightScreen.addComponent(new PlaneShape())
rightScreen.addComponent(new Transform({ 
    scale: new Vector3(4, 2, 1),
    position: new Vector3(12.65, 2, 31.3)
  }))
rightScreen.getComponent(Transform).rotate(Vector3.Up(), -180)
rightScreen.setParent(rightScreenTransform)

rightScreenTransform.getComponent(Transform).scale.setAll(0.625) // You can change the scale of the rightScreen here...
engine.addEntity(rightScreen)

const rightVideoClip = new VideoClip("https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrowazqkbot/b/hezi-work/o/demo-video-1.mp4")
const rightVideoTexture = new VideoTexture(rightVideoClip)
rightVideoTexture.loop = false
const rightImageTexture = new Texture("images/ui/demonstratoin.png")

const rightScreenMaterial = new Material()
rightScreenMaterial.albedoTexture = rightVideoTexture
rightScreenMaterial.emissiveTexture = rightVideoTexture
rightScreenMaterial.emissiveColor = Color3.White()
rightScreenMaterial.emissiveIntensity = 0.6
rightScreenMaterial.roughness = 1.0
rightScreen.addComponent(rightScreenMaterial)

// Video lazy loading
const rightVideoBox = new Entity()
let rightTriggerBox = new utils.TriggerBoxShape(new Vector3(7,5,7), new Vector3(12, 2, 28))
const rightVideoTriggerComponent = new utils.TriggerComponent(
  rightTriggerBox, //shape
  {
      onCameraEnter : () => {
        rightVideoTexture.play()
      },
      onCameraExit : () => {
        rightVideoTexture.pause()
      },
      enableDebug: false
  }
)
rightVideoBox.addComponent(rightVideoTriggerComponent)
engine.addEntity(rightVideoBox)