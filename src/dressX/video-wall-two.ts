import * as utils from "@dcl/ecs-scene-utils";

export class VideoWallTwo extends Entity {
  videoTexture: VideoTexture;
  videoTextureTwo: VideoTexture;
  videoMaterial: BasicMaterial;
  videoMaterialTwo: BasicMaterial;
  isPlayFirst: boolean;

  constructor(
    screenTransform: Transform,
    videoTexture: VideoTexture,
    videoTextureTwo: VideoTexture
    // videoURL: string,
    // videoTwoURL: string,
    // screenTransform: Transform,
    // play: boolean,
    // loop: boolean,
    // clickURL?: string
  ) {
    super();
    this.videoTexture = videoTexture;
    this.videoMaterial = new BasicMaterial();
    this.videoMaterial.texture = this.videoTexture;
    this.addComponentOrReplace(new PlaneShape());
    this.addComponentOrReplace(screenTransform);
    this.addComponentOrReplace(this.videoMaterial);

    this.videoTextureTwo = videoTextureTwo;
    this.videoMaterialTwo = new BasicMaterial();
    this.videoMaterialTwo.texture = this.videoTextureTwo;

    this.isPlayFirst = true;
    this.videoTexture.play();

    this.addComponentOrReplace(
      new OnPointerDown(
        (e) => {
          if (this.isPlaying()) {
            this.pauseVideo();
          } else {
            this.playVideo();
          }
        },
        {
          button: ActionButton.ANY,
          showFeedback: true,
          hoverText: "Play/Pause",
          distance: 16,
        }
      )
    );

    this.addComponentOrReplace(
      new utils.Interval(44000, () => {
        //if(!this.isPlaying()){
          if(this.isPlayFirst){
            this.addComponentOrReplace(this.videoMaterialTwo);
            this.videoTextureTwo.play();
            this.isPlayFirst = false;
          }else{
            this.addComponentOrReplace(this.videoMaterial);
            this.videoTexture.play();
            this.isPlayFirst = true;
          //}
        }
      })
    );
  }

  pauseVideo() {
    this.videoTexture.pause();
    this.videoTextureTwo.pause();
  }

  playVideo() {
    this.videoTexture.play();
    this.videoTextureTwo.play();
  }

  isPlaying() {
    if(this.videoTextureTwo ==null || this.videoTexture == null){
      return true;
    }
    return this.videoTexture.playing || this.videoTextureTwo.playing;
  }
}
