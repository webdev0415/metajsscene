export class VideoWall extends Entity {
  videoTexture: VideoTexture;
  videoMaterial: BasicMaterial;

  constructor(
    screenTransform: Transform,
    videoTexture: VideoTexture,
    // play: boolean,
    // loop: boolean,
    // clickURL?: string
    link?: string
  ) {
    super();
    this.videoTexture = videoTexture;
    this.videoMaterial = new BasicMaterial();
    this.videoMaterial.texture = this.videoTexture;
    this.addComponentOrReplace(new PlaneShape());
    this.addComponentOrReplace(screenTransform);
    this.addComponentOrReplace(this.videoMaterial);

    this.addComponentOrReplace(
      new OnPointerDown(
        
        (e) => {
          if(link != null){
            openExternalURL(link);
          }
          

          if (this.isPlaying()) {
            this.pauseVideo();
          } else {
            this.playVideo();
          }
        },
        {
          button: ActionButton.ANY,
          showFeedback: true,
          hoverText: (link != null)?"Go":"Play/Pause",
          distance: 4,
        }
      )
    );

    // if (clickURL != undefined) {
    //   this.addComponentOrReplace(
    //     new OnPointerDown(
    //       (e) => {
    //         openExternalURL(clickURL);
    //       },
    //       {
    //         button: ActionButton.PRIMARY,
    //         showFeedback: true,
    //         hoverText: "Visit",
    //         distance: 6,
    //       }
    //     )
    //   );
    // }
  }

  pauseVideo() {
    this.videoTexture.pause();
  }

  playVideo() {
    this.videoTexture.play();
  }

  isPlaying() {
    return this.videoTexture.playing;
  }
}
