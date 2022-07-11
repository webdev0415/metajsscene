export type Props = {
  enabled: boolean
  onClick?: Actions
  button?: ActionButton
  onClickText?: string
}

declare enum ActionButton {
  POINTER = 'POINTER',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  ANY = 'ANY'
}

export default class Button implements IScript<Props> {
  active: Record<string, boolean> = {}
  material: BasicMaterial

  init() {
    this.material = new BasicMaterial()
    this.material.texture = new Texture('846479b0-75d3-450d-bbd6-7e6b3355a7a2/models/transparent-texture.png')
    this.material.alphaTest = 1
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const shape = new BoxShape()
    shape.withCollisions = false

    this.active[host.name] = props.enabled

    channel.handleAction('enable', () => {
      this.active[host.name] = true
    })

    channel.handleAction('disable', () => {
      this.active[host.name] = false
    })

    // sync initial values
    channel.request<boolean>('enabled', enabled => {
      this.active[host.name] = enabled
    })
    channel.reply<boolean>('enabled', () => this.active[host.name])

    const ent = new Entity()
    ent.setParent(host)
    ent.addComponent(shape)
    ent.addComponent(this.material)
    ent.addComponent(new Transform({ position: new Vector3(0, 0.5, 0) }))
    ent.addComponent(
      new OnPointerDown(
        () => {
          if (this.active[host.name]) {
            channel.sendActions(props.onClick)
          }
        },
        {
          button: props.button,
          hoverText: props.onClickText,
          distance: 6
        }
      )
    )
  }
}
