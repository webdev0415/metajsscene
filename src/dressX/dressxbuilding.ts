import { FramedGarment } from "./framed-grament";
import { Garment } from "src/dressX/garment";
import { VideoWall } from "./video-wall";
import { VideoWallTwo } from "./video-wall-two";

let spinGroup: Entity[] = [];



let videoDecember3: string =
  "https://dressx.s3.us-east-2.amazonaws.com/Dressx+videos/VIDEO+2+(1).mp4";

let videoDecember2: string =
  "https://dressx.s3.us-east-2.amazonaws.com/Dressx+videos/VIDEO+4+(1).mp4";


let newVideoFrontMusic: string =
  "https://dressx.s3.us-east-2.amazonaws.com/Dressx+videos/_DressX+MTA+852+480.mp4";
let newVideoMusic: string =
  "https://dressx.s3.us-east-2.amazonaws.com/Dressx+videos/_DressX+MTA+885+1057.mp4";
let videoSpaceOutfit: string =
  "https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+SPACE+OUTFIT_1080pFHR.mp4";
let videoDressX: string =
  "https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+DressX+Sustainability+Video_1080p.mp4";

let videoMain: string =
  'https://dressxvideos.s3.us-east-2.amazonaws.com/dressx_master_new-text_v2.mp4';

  let videoClipFrontMusic: VideoClip = new VideoClip(newVideoFrontMusic);
  let videoTextureFrontMusic: VideoTexture = new VideoTexture(videoClipFrontMusic);
  videoTextureFrontMusic.playing = true;
  videoTextureFrontMusic.play();
  videoTextureFrontMusic.loop = true;

let videoClipMusic: VideoClip = new VideoClip(newVideoMusic);
let videoTextureMusic: VideoTexture = new VideoTexture(videoClipMusic);
videoTextureMusic.playing = true;
videoTextureMusic.play();
videoTextureMusic.volume = 0;
videoTextureMusic.loop = true;

let videoClipSpaceOutfit: VideoClip = new VideoClip(videoSpaceOutfit);
let videoTextureSpaceOutfit: VideoTexture = new VideoTexture(
  videoClipSpaceOutfit
);
videoTextureSpaceOutfit.playing = true;
videoTextureSpaceOutfit.play();
videoTextureSpaceOutfit.volume = 0;
videoTextureSpaceOutfit.loop = true;

let videoClipDressX: VideoClip = new VideoClip(videoDressX);
let videoTextureDressX: VideoTexture = new VideoTexture(videoClipDressX);
videoTextureDressX.playing = true;
videoTextureDressX.play();
videoTextureDressX.volume = 0;
videoTextureDressX.loop = true;

let videoClipMain: VideoClip = new VideoClip(videoDecember3);
let videoTextureMain: VideoTexture = new VideoTexture(videoClipMain);
videoTextureMain.playing = true;
videoTextureMain.play();
videoTextureMain.volume = 0;
videoTextureMain.loop = true;

let videoClip2: VideoClip = new VideoClip(videoDecember2);
let videoTexture2: VideoTexture = new VideoTexture(videoClip2);
videoTexture2.playing = true;
videoTexture2.play();
videoTexture2.volume = 0;
videoTexture2.loop = true;




export class SimpleRotate implements ISystem {
  update() {
    for (let entity of spinGroup) {
      let transform = entity.getComponent(Transform);
      transform.rotate(Vector3.Up(), 1);
    }
  }
}

export class DressXBuilding extends Entity {
  constructor(transform: Transform, parent: Entity) {
    super();

    engine.addSystem(new SimpleRotate());

    let buildingShape: GLTFShape = new GLTFShape("models/dressx/blue.glb");
    buildingShape.visible = true;
    buildingShape.isPointerBlocker = false;
    this.addComponentOrReplace(buildingShape);
    this.addComponentOrReplace(transform);

    this.setParent(parent);
    engine.addEntity(this);

    // let triggerEntity = new Entity()
    // const triggerEntity = new Entity()
    //create shape for entity and disable its collision
    // triggerEntity.addComponentOrReplace(new BoxShape())
    // triggerEntity.getComponent(BoxShape).withCollisions = false

    //set transform component with initial position
    // triggerEntity.addComponentOrReplace(new Transform({
    //   position: new Vector3(2, 1.5, -0.3),
    //   scale: new Vector3(0.1,3,2)
    // }))

    // let triggerData: utils.TriggerData = {
    //   onCameraEnter: ()=>{
    //     log("triggered")
    //     // turnOffVideoWalls()
    //   }
    // }

    // triggerEntity.addComponentOrReplace(
    //   new utils.TriggerComponent(
    //     new utils.TriggerBoxShape(),
    //     {
    //       onCameraEnter:()=>{
    //         log("triggered")
    //       }
    //     }
    //   )
    // )

    // triggerEntity.getComponent(utils.TriggerComponent).enabled = false

    //  triggerEntity.setParent(this)

    let garmentRight: Garment = new Garment(
      //new GLTFShape('models/dressx/dress1b.glb'),
      new GLTFShape("models/dressx/november/DC_1.glb"),
      new Transform({
        //position: new Vector3(0.725,1.4,5.4),
        position: new Vector3(0.725, -1.4, 5.4),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(2, 2, 2),
      }),
      this,
      "https://opensea.io/collection/metahelmet"
    );
    spinGroup.push(garmentRight);

    let tshirtMiddle: Garment = new Garment(
      //new GLTFShape('models/dressx/tshirt.glb'),
      new GLTFShape("models/dressx/november/DC_4.glb"),
      new Transform({
        //position: new Vector3(-1.6,1.2,6.9),
        position: new Vector3(-1.6, -1.3, 6.9),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(2, 2, 2),
      }),
      this,
      "https://opensea.io/collection/metahelmet"
    );
    spinGroup.push(tshirtMiddle);

    let garmentLeft: Garment = new Garment(
      //new GLTFShape('models/dressx/longsleeve1b.glb'),
      new GLTFShape("models/dressx/november/DC_2.glb"),
      new Transform({
        position: new Vector3(-4.2, -1.3, 5.7),
        //position: new Vector3(8.2, 0, 3.7),
        rotation: Quaternion.Euler(0, 0, 0),
        //scale: new Vector3(1,1,1)
        scale: new Vector3(2,2,2)
      }),
      this,
      "https://opensea.io/collection/metahelmet"
    );
    spinGroup.push(garmentLeft);

    let frame1: FramedGarment = new FramedGarment(
      "models/dressx/dress-frame.glb",
      new Transform({
        position: new Vector3(0, 1.5, -3),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      new Transform({
        position: new Vector3(0, 0.25, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      this,
      "https://dressx.com/collections/dressx-cosmic-inspired-by-spacex/products/dress-men-occupy-very-little-space-on-earth"
    );

    let frame2: FramedGarment = new FramedGarment(
      "models/dressx/longsleeve-frame.glb",
      new Transform({
        position: new Vector3(-1.5, 1.5, -4.5),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      this,
      "https://dressx.com/collections/dressx-cosmic-inspired-by-spacex/products/sweatshirt-of-course-i-love-you-it-is-my-fault-that-you-have-not-known-it-all-the-while"
    );

    let frame3: FramedGarment = new FramedGarment(
      "models/dressx/longsleeve2a-frame.glb",
      new Transform({
        position: new Vector3(-3, 1.5, -3),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      new Transform({
        position: new Vector3(0, 0, 0),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(1, 1, 1),
      }),
      this,
      "https://dressx.com/collections/dressx-cosmic-inspired-by-spacex/products/blazer-true-love-begins-when-nothing-is-looked-for-in-return"
    );

    let videoWall1: VideoWall = new VideoWall(
      new Transform({
        position: new Vector3(-3.7, 1.9, 8.2),
        rotation: Quaternion.Euler(0, 185, 0),
        scale: new Vector3(4, 2.5, 1),
      }),
      videoTextureMain,
      "https://themta.io/"
    );
    videoWall1.setParent(this);

    let videoWall2: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+SPACE+OUTFIT_1080pFHR.mp4',
      new Transform({
        position: new Vector3(-4.3, 1.9, -9.2),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(2.6, 3.5, 1),
      }),
      videoTextureSpaceOutfit
      //true,
      //true,
      //'https://knownorigin.io/gallery/303350-outfit'
    );
    videoWall2.setParent(this);

    let videoWall3: VideoWall = new VideoWall(
      //'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+DressX+Sustainability+Video_1080p.mp4',
      new Transform({
        // position: new Vector3(-5.7,1.8,-0.30),
        position: new Vector3(-5.7, 1.8, -6.25),
        rotation: Quaternion.Euler(0, 90, 0),
        // scale: new Vector3(9,3.38,1)
        scale: new Vector3(5.8, 3.27, 1),
      }),
      videoTextureDressX
      // false,
      // true,''
    );
    videoWall3.addComponentOrReplace(
      new OnPointerDown(() => {
        if (videoWall3.isPlaying()) {
          videoWall3.pauseVideo();
          videoWall9.pauseVideo();
          videoWall10.pauseVideo();
          videoWall4.playVideo();
        } else {
          videoWall4.pauseVideo();
          videoWall3.playVideo();
          videoWall9.playVideo();
          videoWall10.playVideo();
          // this.triggerEntity.getComponent(utils.TriggerComponent).enabled = true
        }
      })
    );
    videoWall3.setParent(this);

    let videoWall4: VideoWallTwo = new VideoWallTwo(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/dressx_master_new-text_v2.mp4',
      //'https://dressxvideos.s3.us-east-2.amazonaws.com/%5BConverted+by+HDconvert.com%5D+Copy+of+DAICHIYAMAMOTO_KillMe_H264_SQ+(1).mp4',
      new Transform({
        position: new Vector3(2.8, 7.5, -0.35),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(11, 6.19, 1),
      }),
      videoTextureMain,
      videoTextureFrontMusic,
    );

    videoWall4.setParent(this);

    let videoWall5: VideoWall = new VideoWall(
      //'https://dressxvideos.s3.us-east-2.amazonaws.com/%5BConverted+by+HDconvert.com%5D+Copy+of+DAICHIYAMAMOTO_KillMe_H264_SQ+(1).mp4',
      new Transform({
        position: new Vector3(-.35, 1.9, 7.5),
        rotation: Quaternion.Euler(0, 205, 0),
        scale: new Vector3(2.93, 3.5, 1),
      }),
      videoTextureMusic
    );
    videoWall5.setParent(this);

    let videoWall6: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/%5BConverted+by+HDconvert.com%5D+Copy+of+DAICHIYAMAMOTO_KillMe_H264_SQ+(1).mp4',
      new Transform({
        position: new Vector3(1.67, 1.9, 5),
        rotation: Quaternion.Euler(0, 250, 0),
        scale: new Vector3(4, 2.5, 1),
      }),
      videoTexture2,
      "https://themta.io/"
    );
    videoWall6.setParent(this);

    let videoWall7: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+SPACE+OUTFIT_1080pFHR.mp4',
      new Transform({
        position: new Vector3(-1.5, 1.9, -8.8),
        rotation: Quaternion.Euler(0, -15, 0),
        scale: new Vector3(2.6, 3.5, 1),
      }),
      videoTextureSpaceOutfit
      // true,
      // true,
      // 'https://knownorigin.io/gallery/303350-outfit'
    );
    videoWall7.setParent(this);

    let videoWall8: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+SPACE+OUTFIT_1080pFHR.mp4',
      new Transform({
        position: new Vector3(1, 1.9, -7.6),
        rotation: Quaternion.Euler(0, -35, 0),
        scale: new Vector3(2.6, 3.5, 1),
      }),
      videoTextureSpaceOutfit
      // true,
      // true,
      // 'https://knownorigin.io/gallery/303350-outfit'
    );
    videoWall8.setParent(this);

    let videoWall9: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+DressX+Sustainability+Video_1080p.mp4',
      new Transform({
        // position: new Vector3(-5.7,1.8,-0.30),
        position: new Vector3(-5.7, 1.8, -0.3),
        rotation: Quaternion.Euler(0, 90, 0),
        // scale: new Vector3(9,3.38,1)
        scale: new Vector3(5.8, 3.27, 1),
      }),
      videoTextureDressX
      // false,
      // true,
      // ''
    );
    videoWall9.addComponentOrReplace(
      new OnPointerDown(() => {
        if (videoWall9.isPlaying()) {
          videoWall3.pauseVideo();
          videoWall9.pauseVideo();
          videoWall10.pauseVideo();
          videoWall4.playVideo();
        } else {
          videoWall4.pauseVideo();
          videoWall3.playVideo();
          videoWall9.playVideo();
          videoWall10.playVideo();
          // this.triggerEntity.getComponent(utils.TriggerComponent).enabled = true
        }
      })
    );
    videoWall9.setParent(this);

    let videoWall10: VideoWall = new VideoWall(
      // 'https://dressxvideos.s3.us-east-2.amazonaws.com/9convert.com+-+DressX+Sustainability+Video_1080p.mp4',
      new Transform({
        // position: new Vector3(-5.7,1.8,-0.30),
        position: new Vector3(-5.7, 1.8, 5.65),
        rotation: Quaternion.Euler(0, 90, 0),
        // scale: new Vector3(9,3.38,1)
        scale: new Vector3(5.8, 3.27, 1),
      }),
      videoTextureDressX
      // false,
      // true,
      // ''
    );
    videoWall10.addComponentOrReplace(
      new OnPointerDown(() => {
        if (videoWall10.isPlaying()) {
          videoWall3.pauseVideo();
          videoWall9.pauseVideo();
          videoWall10.pauseVideo();
          videoWall4.playVideo();
        } else {
          videoWall4.pauseVideo();
          videoWall3.playVideo();
          videoWall9.playVideo();
          videoWall10.playVideo();
        }
      })
    );
    videoWall10.setParent(this);

    let logo: Entity = new Entity();
    let logoShape: GLTFShape = new GLTFShape(
      "models/dressx/logo_gold_static.glb"
    );
    logo.addComponentOrReplace(logoShape);
    logo.addComponentOrReplace(
      new Transform({
        position: new Vector3(3, 17.5, -0.5),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(1, 1, 1),
      })
    );
    spinGroup.push(logo);
    logo.setParent(this);
    
    let garmentCenter: Garment = new Garment(
      //new GLTFShape('models/dressx/dress1b.glb'),
      new GLTFShape("models/dressx/november/DC_3.glb"),
      new Transform({
        position: new Vector3(-1.5, -1.2, 0.2),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(2, 2, 2),
      }),
      this,
      "https://opensea.io/collection/metahelmet"
    );
    spinGroup.push(garmentCenter);
  }
}
