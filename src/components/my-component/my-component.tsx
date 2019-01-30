import { Component, Method, Prop, State } from '@stencil/core'
enum ViewMode {
  MAP,
  LIST
}
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() public first: string

  @State() public viewMode: ViewMode
  /**
   * The last name
   */
  @Prop() public last: string
  public componentWillLoad () {
    console.log('The component is about to be rendered')
  }
  public componentDidLoad () {
    console.log('The component has been rendered')
  }
  public componentDidUpdate () {
    console.log('The component did update')
  }

  @Method()
  public setVisitedPOIs (pois) {
    console.log(pois)
  }

  @Method()
  public setViewMode (viewMode: ViewMode) {
    this.viewMode = viewMode
  }

  public render () {
    return <div>Hello, World! I'm {this.getText()}</div>
  }

  private getText (): string {
    return `${this.first} ${this.last}`
  }
}
