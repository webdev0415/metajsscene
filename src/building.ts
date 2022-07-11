export class Building extends Entity {
  constructor(
    transform: Transform,
    parent: Entity,
    glb: string,
  ) {
      super()
      let shape: GLTFShape = new GLTFShape(glb);
      shape.visible = true;
      this.addComponentOrReplace(shape);
      this.addComponentOrReplace(transform)

      this.setParent(parent)
      engine.addEntity(this)
  }
}