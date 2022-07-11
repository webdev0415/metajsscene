export class Ball extends Entity {
    constructor(
        transform: Transform,
        material: Material,
        parent: Entity
    ) {
        super()
        this.setParent(parent)
        engine.addEntity(this)
        let sphere = new SphereShape()
        sphere.withCollisions = false
        this.addComponentOrReplace(sphere)
        this.addComponentOrReplace(material)
        this.addComponentOrReplace(transform)
    }
}