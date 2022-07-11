import { Tribute } from './tribute';
import { DressXBuilding } from './dressX/dressxbuilding';
import { Building } from "./building"
import { Gate } from "./gate"

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script3 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script16 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import './jp-room-media'

const scene: Entity = new Entity('scene');
scene.addComponentOrReplace(new Transform({
  position: new Vector3(24,0,16),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1,1,1)
}));
engine.addEntity(scene);


const canvas = new UICanvas()


let assistantImg = new UIImage(canvas, new Texture("images/ui/assistant.png"))
  assistantImg.width = `313px`;
  assistantImg.height = "313px";
  assistantImg.sourceWidth = 313;
  assistantImg.sourceHeight = 313;
  assistantImg.positionY = 0
  assistantImg.positionX = 0
  assistantImg.hAlign = "left"
  assistantImg.vAlign = "bottom"
  assistantImg.visible = false


canvas.visible = true
canvas.isPointerBlocker = true;


// const buildingRedOrange: Building = new Building(
//   new Transform({
//     position: new Vector3(-16.166,0,11.52),
//     rotation: Quaternion.Euler(0,-90,0),
//     scale: new Vector3(1,1,1)
//   }),
//   scene,
//   'models/red-orange.glb'
// );

// -0.29022

const buildingBlack: Building = new Building(
  new Transform({
    position: new Vector3(0,0,11.583),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/black.glb'
);

const buildingRainbow: Building = new Building(
  new Transform({
    position: new Vector3(6.3255,0,-9.5259),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/rainbow.glb'
);

const buildingGray: Building = new Building(
  new Transform({
    position: new Vector3(14.148,0,10.228),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/gray.glb'
);

const buildingBlue: Building = new Building(
  new Transform({
    position: new Vector3(-15.152,0,-9.7443),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/blue.glb'
);



const buildingOrange: Tribute = new Tribute(
  new Transform({
    position: new Vector3(19.75,0.1,-0.8),
    rotation: Quaternion.Euler(0,-90,0)
  }),
  scene
)

// const buildingOrange: Building = new Building(
//   new Transform({
//     position: new Vector3(16.347,0,-1.4047),
//     rotation: Quaternion.Euler(0,-90,0),
//     scale: new Vector3(1,1,1)
//   }),
//   scene,
//   'models/orange.glb'
// );

const gate1: Gate = new Gate(
  new Transform({
    position: new Vector3(-21.503,0,0),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/gate.glb'
);

const gate2: Gate = new Gate(
  new Transform({
    position: new Vector3(0,0,-13.357),
    rotation: Quaternion.Euler(0,-180,0),
    scale: new Vector3(1,1,1)
  }),
  scene,
  'models/gate.glb'
);

const ground: Entity = new Entity();
const groundShape: GLTFShape = new GLTFShape('models/ground.glb');
groundShape.visible = true;
ground.addComponentOrReplace(groundShape);
ground.addComponentOrReplace(new Transform({
  position: new Vector3(0,-0.094829,0),
  rotation: Quaternion.Euler(0,-90,0),
  scale: new Vector3(1,1,1)
}));
ground.setParent(scene);
engine.addEntity(ground);


const dressXBuilding: DressXBuilding = new DressXBuilding(
  new Transform({
    position: new Vector3(-15.152,0,-9.7443),
    rotation: Quaternion.Euler(0,-90,0),
    scale: new Vector3(1,1,1)
  }),
  scene
);


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

// const entity = new Entity('entity')
// engine.addEntity(entity)
// entity.setParent(_scene)
// const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
// gltfShape.withCollisions = true
// gltfShape.isPointerBlocker = true
// gltfShape.visible = true
// entity.addComponentOrReplace(gltfShape)
// const transform2 = new Transform({
//   position: new Vector3(8, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity.addComponentOrReplace(transform2)

// const entity2 = new Entity('entity2')
// engine.addEntity(entity2)
// entity2.setParent(_scene)
// entity2.addComponentOrReplace(gltfShape)
// const transform3 = new Transform({
//   position: new Vector3(24, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity2.addComponentOrReplace(transform3)

// const entity3 = new Entity('entity3')
// engine.addEntity(entity3)
// entity3.setParent(_scene)
// entity3.addComponentOrReplace(gltfShape)
// const transform4 = new Transform({
//   position: new Vector3(40, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity3.addComponentOrReplace(transform4)

// const entity4 = new Entity('entity4')
// engine.addEntity(entity4)
// entity4.setParent(_scene)
// entity4.addComponentOrReplace(gltfShape)
// const transform5 = new Transform({
//   position: new Vector3(8, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity4.addComponentOrReplace(transform5)

// const entity5 = new Entity('entity5')
// engine.addEntity(entity5)
// entity5.setParent(_scene)
// entity5.addComponentOrReplace(gltfShape)
// const transform6 = new Transform({
//   position: new Vector3(24, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity5.addComponentOrReplace(transform6)

// const entity6 = new Entity('entity6')
// engine.addEntity(entity6)
// entity6.setParent(_scene)
// entity6.addComponentOrReplace(gltfShape)
// const transform7 = new Transform({
//   position: new Vector3(40, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity6.addComponentOrReplace(transform7)

// const entity7 = new Entity('entity7')
// engine.addEntity(entity7)
// entity7.setParent(_scene)
// entity7.addComponentOrReplace(gltfShape)
// const transform8 = new Transform({
//   position: new Vector3(8, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity7.addComponentOrReplace(transform8)

// const entity8 = new Entity('entity8')
// engine.addEntity(entity8)
// entity8.setParent(_scene)
// entity8.addComponentOrReplace(gltfShape)
// const transform9 = new Transform({
//   position: new Vector3(24, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity8.addComponentOrReplace(transform9)

// const entity9 = new Entity('entity9')
// engine.addEntity(entity9)
// entity9.setParent(_scene)
// entity9.addComponentOrReplace(gltfShape)
// const transform10 = new Transform({
//   position: new Vector3(40, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity9.addComponentOrReplace(transform10)

// const externalLink = new Entity('externalLink')
// engine.addEntity(externalLink)
// externalLink.setParent(_scene)
// const transform11 = new Transform({
//   position: new Vector3(28.775089263916016, 0.44772642850875854, 35.4188232421875),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(0.48000001907348633, 0.48000001907348633, 0.48000001907348633)
// })
// externalLink.addComponentOrReplace(transform11)

// const clickArea = new Entity('clickArea')
// engine.addEntity(clickArea)
// clickArea.setParent(_scene)
// const transform12 = new Transform({
//   position: new Vector3(22.60221326192176, 0.176926851272583, 31.6204833984375),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(0.8310140371322632, 2, 0.7109283208847046)
// })
// clickArea.addComponentOrReplace(transform12)

// const clickArea2 = new Entity('clickArea2')
// engine.addEntity(clickArea2)
// clickArea2.setParent(_scene)
// const transform13 = new Transform({
//   position: new Vector3(22.809017283120, 0.24010643362998962, 32.58222579956055),
//   rotation: Quaternion.Euler(0, 270,0),
//   scale: new Vector3(1.0399389266967773, 2, 0.7109283208847046)
// })
// clickArea2.addComponentOrReplace(transform13)

// const externalLink2 = new Entity('externalLink2')
// engine.addEntity(externalLink2)
// externalLink2.setParent(_scene)
// const transform14 = new Transform({
//   position: new Vector3(28.629018783569336, 0.44772642850875854, 35.54761505126953),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(0.48000001907348633, 0.48000001907348633, 0.48000001907348633)
// })
// externalLink2.addComponentOrReplace(transform14)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(7.8, 0, 27.5),
  rotation: Quaternion.Euler(0, 270,0),
  scale: new Vector3(1, 1, 1)
})
entity10.addComponentOrReplace(transform15)
//const gltfShape2 = new GLTFShape("5ac8324b-3df2-46c4-a336-ca969ac13511/здание.gltf")
const gltfShape2 = new GLTFShape("models/onix/onixbuilding.gltf")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
entity10.addComponentOrReplace(gltfShape2)

const uiTrigger = new Entity()
const transformTri = new Transform({
  position: new Vector3(1, 1, 0),
  scale: new Vector3(3,3,3),
})
uiTrigger.addComponent(transformTri)

// const invisibleWall = new Entity('invisibleWall')
// engine.addEntity(invisibleWall)
// invisibleWall.setParent(_scene)
// const transform16 = new Transform({
//   position: new Vector3(23.8, 3.820854663848877, 26.5),
//   rotation: Quaternion.Euler(0, 270,0),
//   scale: new Vector3(9.011509895324707, 0.2778819799423218, 17.083110809326172)
// })
// invisibleWall.addComponentOrReplace(transform16)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script16 = new Script16()
script16.init(options)
// script1.init(options)
// script2.init(options)
// script3.init(options)
//script1.spawn(externalLink, {"url":"https://ru.wikipedia.org/wiki/JPMorgan_Chase","name":"jp link"}, createChannel(channelId, externalLink, channelBus))
//script2.spawn(clickArea, {"enabled":true,"onClickText":"wiki","button":"POINTER","onClick":[{"entityName":"externalLink","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea, channelBus))
//script2.spawn(clickArea2, {"enabled":true,"onClickText":"twitter","button":"POINTER","onClick":[{"entityName":"externalLink2","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea2, channelBus))
//script1.spawn(externalLink2, {"url":"https://twitter.com/jpmorgan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor","name":"jp link"}, createChannel(channelId, externalLink2, channelBus))
//script3.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))

const jamesBlurryImage = new Entity('jamesBlurryImage')
engine.addEntity(jamesBlurryImage)
jamesBlurryImage.setParent(_scene)
const transform652 = new Transform({
  position: new Vector3(8, 1.35, 31.505),
  rotation: new Quaternion(-5.7769201308201495e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1.0000026226043701)
})
jamesBlurryImage.addComponentOrReplace(transform652)
script16.spawn(jamesBlurryImage, {"image":"images/headshot_jamesdimonradial.png"}, createChannel(channelId, jamesBlurryImage, channelBus))

const assistantImage = new Entity('assistantImage')
//engine.addEntity(assistantImage)
assistantImage.setParent(_scene)
const transform700 = new Transform({
  position: new Vector3(8, 1.35, 31.50),
  rotation: new Quaternion(-5.7769201308201495e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1.0000026226043701)
})
assistantImage.addComponentOrReplace(transform700)
script16.spawn(assistantImage, {"image":"images/ui/assistant.jpg"}, createChannel(channelId, assistantImage, channelBus))
engine.removeEntity(assistantImage)


const speechBubble = new Entity('speechBubble')
engine.addEntity(speechBubble)
speechBubble.setParent(_scene)
const transform230 = new Transform({
  position: new Vector3(6.9, 1.6, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3, 1.1, 0.8)
})
speechBubble.addComponentOrReplace(transform230)
const speechBubbleShape = new GLTFShape("models/speech-bubble-invert.glb")
speechBubbleShape.withCollisions = true
speechBubbleShape.isPointerBlocker = true
speechBubbleShape.visible = false
speechBubble.addComponentOrReplace(speechBubbleShape)
speechBubble.addComponent(new Billboard(false, true ,false))

const bubbleText = new Entity()
bubbleText.setParent(speechBubble)
bubbleText.addComponent(new TextShape())
bubbleText.addComponent(new Transform({position: new Vector3(-0.35,0.4,-0.1), scale: new Vector3(0.8,0.8,0.8), rotation: new Quaternion(0, 180, 0, 1)}))
bubbleText.getComponent(TextShape).fontSize = 1
bubbleText.getComponent(TextShape).hTextAlign = "center"
//bubbleText.getComponent(TextShape).textWrapping = true
bubbleText.getComponent(TextShape).color = Color3.Black()
bubbleText.getComponent(TextShape).visible = false

// create trigger area object, setting size and relative position
let triggerBox = new utils.TriggerBoxShape()
uiTrigger.addComponent(
  new utils.TriggerComponent(
    triggerBox, //shape
    {
      onCameraEnter: () => {
        log('triggered!');
        //assistantImg.visible = true;
        engine.addEntity(assistantImage)
        speechBubbleShape.visible = true
        bubbleText.getComponent(TextShape).visible = true
        bubbleText.getComponent(TextShape).value = "\n\nWelcome to our space!\n _________________ \n\n Christine May \n Global head of Link,\n Crypto, Metaverse\n Onyx by J.P Morgan"
        bubbleText.addComponent(
          new utils.Delay(4000, () => {
            bubbleText.getComponent(TextShape).value = "\n\nCheck out upstairs\nfor additional content\n _________________ \n\n Christine May \n Global head of Link,\n Crypto, Metaverse\n Onyx by J.P Morgan"
          })
        )
      },
      onCameraExit:()=>{
        //assistantImg.visible = false;
        //engine.removeEntity(assistantImage)
        speechBubbleShape.visible = false
        bubbleText.getComponent(TextShape).visible = false
      },
      enableDebug: false
    },
  )
)

// PDF

const pdfModel = new Entity('pdfModel')
const pdfShape = new GLTFShape("models/pdf-white.glb")

const blackPdfModel = new Entity('blackPpdfModel')
const blackPdfShape = new GLTFShape("models/pdf.glb")

blackPdfModel.addComponent(blackPdfShape)
blackPdfModel.setParent(_scene)
const transform653 = new Transform({
  position: new Vector3(10.4, 1.5, 24),
  rotation: new Quaternion(-90, 90, 1, 1),
  scale: new Vector3(4, 2, 4.0000026226043701)
})
blackPdfModel.addComponentOrReplace(transform653)
blackPdfModel.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(45, 0, 0))))
blackPdfModel.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://gateway.on24.com/wcc/eh/3177500/lp/3512788/mcbdcs-unlocking-120-billion-value-in-cross-border-payments")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)
engine.addEntity(blackPdfModel)

const blackPdfModel2 = new Entity('blackPpdfModel2')
const blackPdfShape2 = new GLTFShape("models/pdf-cover2.glb")

blackPdfModel2.addComponent(blackPdfShape2)
blackPdfModel2.setParent(_scene)
const transform654 = new Transform({
  position: new Vector3(5, 1.5, 24),
  rotation: new Quaternion(-90, 90, 1, 1),
  scale: new Vector3(4, 2, 4.0000026226043701)
})
blackPdfModel2.addComponentOrReplace(transform654)
blackPdfModel2.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(45, 0, 0))))
blackPdfModel2.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://gateway.on24.com/wcc/eh/3177500/lp/3512788/mcbdcs-unlocking-120-billion-value-in-cross-border-payments")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)
engine.addEntity(blackPdfModel2)

const pdfModel3 = new Entity('pdfModel3')
const pdfShape3 = new GLTFShape("models/pdf-cover3.glb")

pdfModel3.addComponent(pdfShape3)
pdfModel3.setParent(_scene)
const transform660 = new Transform({
  position: new Vector3(9.8, 5.8, 26.6),
  rotation: new Quaternion(0,45,0,-40),
  scale: new Vector3(4, 2, 4.0000026226043701)
})
pdfModel3.addComponentOrReplace(transform660)
pdfModel3.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://gateway.on24.com/wcc/eh/3177500/lp/3512788/mcbdcs-unlocking-120-billion-value-in-cross-border-payments")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)
engine.addEntity(pdfModel3)

const pdfModel4 = new Entity('pdfModel4')
pdfModel4.addComponent(pdfShape3)
pdfModel4.setParent(_scene)
const transform661 = new Transform({
  position: new Vector3(10.6, 5.8, 26.6),
  rotation: new Quaternion(0,45,0,-60),
  scale: new Vector3(4, 2, 4.0000026226043701)
})
pdfModel4.addComponentOrReplace(transform661)
pdfModel4.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://gateway.on24.com/wcc/eh/3177500/lp/3512788/mcbdcs-unlocking-120-billion-value-in-cross-border-payments")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)
engine.addEntity(pdfModel4)

const pdfModel5 = new Entity('pdfModel5')
const pdfShape5 = new GLTFShape("models/pdf-cover4.glb")

pdfModel5.addComponent(pdfShape5)
pdfModel5.setParent(_scene)
const transform662 = new Transform({
  position: new Vector3(5.6, 5.8, 27),
  rotation: new Quaternion(0,45,0,-45),
  scale: new Vector3(4, 2, 4.0000026226043701)
})
pdfModel5.addComponentOrReplace(transform662)
pdfModel5.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://gateway.on24.com/wcc/eh/3177500/lp/3512788/mcbdcs-unlocking-120-billion-value-in-cross-border-payments")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)
engine.addEntity(pdfModel5)

// UI trigger

uiTrigger.setParent(entity10)

uiTrigger.addComponent(new BoxShape())
const myMaterial = new Material();
myMaterial.albedoColor = Color4.FromInts(0,0,0,0);

//Assign the material to the entity
uiTrigger.addComponent(myMaterial);
uiTrigger.getComponent(BoxShape).withCollisions = false
engine.addEntity(uiTrigger)


// logo wall

const transparentMaterial = new Material()
transparentMaterial.albedoColor = new Color4(0, 0, 0,0)




const coinImage = new Entity('coinImage')
engine.addEntity(coinImage)
coinImage.setParent(_scene)
const transform655 = new Transform({
  position: new Vector3(1.181, 1.6, 27.7),
  rotation: new Quaternion(-90, 0, 90, 1),
  scale: new Vector3(0.2, 0.2, 0.2)
})
coinImage.addComponentOrReplace(transform655)
script16.spawn(coinImage, {"image":"images/coin.jpg"}, createChannel(channelId, coinImage, channelBus))
coinImage.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0))))

const coinImageClickBox = new Entity()
coinImageClickBox.addComponent(new BoxShape())
coinImageClickBox.setParent(_scene)
coinImageClickBox.addComponent(transparentMaterial)
coinImageClickBox.addComponent(new Transform({scale: new Vector3(0.4, 0.2, 0.3), position: new Vector3(1.45, 1.6, 27.7)}))
coinImageClickBox.addComponent(new OnPointerDown((e) => {
    openExternalURL("https://www.jpmorgan.com/onyx/coin-system.htm")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)

const liinkImage = new Entity('liinkImage')
engine.addEntity(liinkImage)
liinkImage.setParent(_scene)
const transform656 = new Transform({
  position: new Vector3(1.181, 1.56, 27.1),
  rotation: new Quaternion(-90, 0, 90, 1),
  scale: new Vector3(0.2, 0.2, 0.2)
})
liinkImage.addComponentOrReplace(transform656)
script16.spawn(liinkImage, {"image":"images/liink.jpg"}, createChannel(channelId, liinkImage, channelBus))
liinkImage.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0))))

const liinkImageClickBox = new Entity()
liinkImageClickBox.addComponent(new BoxShape())
liinkImageClickBox.setParent(_scene)
liinkImageClickBox.addComponent(transparentMaterial)
liinkImageClickBox.addComponent(new Transform({scale: new Vector3(0.4, 0.2, 0.3), position: new Vector3(1.45, 1.56, 27.1),}))
liinkImageClickBox.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://www.jpmorgan.com/onyx/liink.htm")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)

const odaImage = new Entity('odaImage')
engine.addEntity(odaImage)
odaImage.setParent(_scene)
const transform657 = new Transform({
  position: new Vector3(1.181, 3.01, 28.5),
  rotation: new Quaternion(-90, 0, 90, 1),
  scale: new Vector3(0.2, 0.2, 0.2)
})
odaImage.addComponentOrReplace(transform657)
script16.spawn(odaImage, {"image":"images/oda.jpg"}, createChannel(channelId, odaImage, channelBus))
odaImage.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0))))

const odaImageClickBox = new Entity()
odaImageClickBox.addComponent(new BoxShape())
odaImageClickBox.setParent(_scene)
odaImageClickBox.addComponent(transparentMaterial)
odaImageClickBox.addComponent(new Transform({scale: new Vector3(0.4, 0.2, 0.3), position: new Vector3(1.45, 2.4, 28.5),}))
odaImageClickBox.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://www.jpmorgan.com/onyx/onyx-digital-assets.htm")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)

const cefImage = new Entity('cefImage')
engine.addEntity(cefImage)
cefImage.setParent(_scene)
const transform658 = new Transform({
  position: new Vector3(1.181, 3.01, 28.92),
  rotation: new Quaternion(-90, 0, 90, 1),
  scale: new Vector3(0.2, 0.2, 0.2)
})
cefImage.addComponentOrReplace(transform658)
script16.spawn(cefImage, {"image":"images/cef.jpg"}, createChannel(channelId, cefImage, channelBus))
cefImage.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0))))

const onyxImage = new Entity('onyxImage')
engine.addEntity(onyxImage)
onyxImage.setParent(_scene)
const transform659 = new Transform({
  position: new Vector3(1.181, 1.6, 28.23),
  rotation: new Quaternion(-90, 0, 90, 1),
  scale: new Vector3(0.2, 0.2, 0.2)
})
onyxImage.addComponentOrReplace(transform659)
script16.spawn(onyxImage, {"image":"images/onyx.png"}, createChannel(channelId, onyxImage, channelBus))
onyxImage.addComponent((new utils.KeepRotatingComponent(Quaternion.Euler(0, 45, 0))))

const onyxImageClickBox = new Entity()
onyxImageClickBox.addComponent(new BoxShape())
onyxImageClickBox.setParent(_scene)
onyxImageClickBox.addComponent(transparentMaterial)
onyxImageClickBox.addComponent(new Transform({scale: new Vector3(0.4, 0.2, 0.3), position: new Vector3(1.45, 1.6, 28.23)}))
onyxImageClickBox.addComponent(new OnPointerDown((e) => {
      openExternalURL("https://www.jpmorgan.com/onyx/index.htm")
    },
    {
      button: ActionButton.POINTER,
      showFeedback: true,
      hoverText: "Open document",
    }
  )
)


// // Tiger stuff

// Coordinates of path to patrol
const point1 = new Vector3(11, 0.03, 30)
const point2 = new Vector3(3, 0.03, 30)
const point3 = new Vector3(6.5, 0.03, 25)
const path: Vector3[] = [point1, point2, point3]

const TURN_TIME = 0.05

// LerpData component
@Component('lerpData')
export class LerpData {
  array: Vector3[] = path
  origin: number = 0
  target: number = 1
  fraction: number = 0
  yelling: boolean = false
  yellingAtPlayer: boolean = false
}

// Rotate component
@Component('timeOut')
export class TimeOut {
  timeLeft: number
  onWait?: () => void
  constructor(time: number, onWait?: () => void) {
    this.timeLeft = time
    this.onWait = onWait
  }
}

// component group to hold all entities with a timeOut
export const paused = engine.getComponentGroup(TimeOut)

type walkMessage = {
  tigerModelPos: Vector3
  origin: number
  target: number
  fraction: number
}

const tigerModel = new Entity('tigerModel')
const tigerShape = new GLTFShape("models/tiger-v1.glb")

let tirgerAnimator = new Animator()
// Add animator component to the entity
tigerModel.addComponent(tirgerAnimator)

// Instance animation clip object
const walkClip = new AnimationState("metarig.001Action.006")

// Add animation clip to Animator component
tirgerAnimator.addClip(walkClip)
walkClip.play()

tigerModel.addComponent(tigerShape)
//tigerModel.setParent(_scene)
const transform701 = new Transform({
  position: new Vector3(11, 0.03, 30),
  rotation: new Quaternion(0,-1,0,1),
  scale: new Vector3(1, 1, 1.0000026226043701)
})
tigerModel.addComponentOrReplace(transform701)
engine.addEntity(tigerModel)

tigerModel.addComponent(new LerpData())

// Walk System
export class tigerModelWalk {
  update(dt: number) {
    if (!tigerModel.hasComponent(TimeOut)) {
      let transform = tigerModel.getComponent(Transform)
      let path = tigerModel.getComponent(LerpData)
      if (path.fraction < 1) {
        path.fraction += dt / 8
        transform.position = Vector3.Lerp(
          path.array[path.origin],
          path.array[path.target],
          path.fraction
        )
      } else {
        path.origin = path.target
        path.target += 1
        if (path.target >= path.array.length) {
          path.target = 0
        }
        path.fraction = 0
        transform.lookAt(path.array[path.target])
        walkClip.pause()
        tigerModel.addComponent(
          new TimeOut(TURN_TIME, () => {
            walkClip.play()
          })
        )
      }
    }
  }
}

engine.addSystem(new tigerModelWalk())

// Wait System
export class WaitSystem {
  update(dt: number) {
    for (let ent of paused.entities) {
      let time = ent.getComponentOrNull(TimeOut)
      if (time) {
        if (time.timeLeft > 0) {
          time.timeLeft -= dt
        } else {
          if (time.onWait) {
            time.onWait()
          }
          ent.removeComponent(TimeOut)
        }
      }
    }
  }
}

engine.addSystem(new WaitSystem())

channelBus.on('walk', (info: walkMessage) => {
  walkClip.play()
  let path = tigerModel.getComponent(LerpData)
  let transform = tigerModel.getComponent(Transform)
  transform.position = info.tigerModelPos
  path.target = info.target
  path.origin = info.origin
  path.fraction = info.fraction
  path.yelling = false
  transform.lookAt(path.array[path.target])
})

// To get the initial state of the scene from other players when joining
channelBus.emit('getGameState', {})

// To return the initial state of the scene to new players
channelBus.on('getGameState', () => {
  let transform = tigerModel.getComponent(Transform)
  let path = tigerModel.getComponent(LerpData)
  const action: walkMessage = {
    tigerModelPos: transform.position.clone(),
    origin: path.origin,
    target: path.target,
    fraction: path.fraction,
  }
  channelBus.emit('walk', action)
})