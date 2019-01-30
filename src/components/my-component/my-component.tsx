import { Component, Method, Prop, State } from '@stencil/core'
import { ViewMode } from '../../utils/view-mode.enum'

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

  /**
   * The view mode of the map
   */
  @State() public viewMode: ViewMode

  /**
   * The last name
   */
  @Prop() public last: string

  /**
   * sets visited pois
   */
  @Method()
  public setVisitedPOIs (pois: {key: boolean}) {
    console.log(pois)
  }

  /**
   * sets view mode
   */
  @Method()
  public setViewMode (viewMode: ViewMode) {
    this.viewMode = viewMode
  }

  public componentWillLoad () {
    console.log('The component is about to be rendered')
  }
  public componentDidLoad () {
    console.log('The component has been rendered')
  }
  public componentDidUpdate () {
    console.log('The component did update')
  }
  public componentWillUpdate () {
    console.log('The component will update')
  }

  public render () {
    return <div>Hello, World! I'm {this.getText()}</div>
  }

  private getText (): string {
    return `${this.first} ${this.last}`
  }
}
