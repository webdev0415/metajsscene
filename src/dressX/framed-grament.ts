import { Garment } from "./garment"

export class FramedGarment extends Entity {
    constructor(
        garmentFile: string,
        transform1: Transform,
        transform2: Transform,
        parent: Entity,
        link: string
    ) {
        super()
        let frameShape: GLTFShape = new GLTFShape('models/dressx/frame2.glb')
        frameShape.withCollisions=false
        this.addComponentOrReplace(frameShape)
        this.addComponentOrReplace(transform1)
        this.setParent(parent)
        engine.addEntity(this)

        let garment: Garment = new Garment(
            new GLTFShape(garmentFile),
            transform2,
            this,
            link
        )
    }
}