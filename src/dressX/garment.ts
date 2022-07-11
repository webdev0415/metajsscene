export class Garment extends Entity {
  constructor(
    model: GLTFShape,
    transform: Transform,
    parent: Entity,
    link: string
  ) {
    super();
    this.setParent(parent);
    engine.addEntity(this);
    model.withCollisions = false;
    this.addComponentOrReplace(model);
    this.addComponentOrReplace(transform);

    // Create entity
    const box = new Entity();

    // Give entity a shape and transform
    box.addComponent(new BoxShape());
    box.addComponent(new Transform({
      //position: new Vector3(0.725,1.4,5.4),
      position: new Vector3(0,1,0),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(0.5,3,0.5),
    }));

    const myMaterial = new Material();
    myMaterial.albedoColor = Color4.FromInts(0,0,0,0);

    //Assign the material to the entity
    box.addComponent(myMaterial);

    box.setParent(this);
    engine.addEntity(box);

    box.addComponentOrReplace(
      new OnPointerDown(
        (e) => {
          openExternalURL(link);
        },
        {
          button: ActionButton.ANY,
          showFeedback: true,
          hoverText: "View Details",
          distance: 6,
        }
      )
    );
  }
}
