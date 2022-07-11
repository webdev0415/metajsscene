export class Garment extends Entity {
    constructor(
        model: GLTFShape,
        transform: Transform,
        parent: Entity
    ) {
        super()
        this.setParent(parent)
        engine.addEntity(this)
        model.withCollisions=false
        this.addComponentOrReplace(model)
        this.addComponentOrReplace(transform)
    }
}