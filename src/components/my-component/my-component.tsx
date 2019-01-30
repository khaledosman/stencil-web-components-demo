import { Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core'
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
  @Prop() public todos: Array<{ name: string }>
  /**
   * The last name
   */
  @Prop() public last: string

  @State() public potato: string = 'w00t'
  /**
   * The view mode of the map
   */
  @State() public viewMode: ViewMode
  @State() public date: number

  @Event() public buttonClicked: EventEmitter

  constructor () {
    this.buttonClickedHandler = this.buttonClickedHandler.bind(this)
  }

    /**
   * sets visited pois
   */
  @Method()
  public setVisitedPOIs (pois: { key: boolean }) {
    console.log(pois)
  }

  @Method()
  public setPotato (potato: string) {
    this.potato = potato
  }
  /**
   * sets view mode
   */
  @Method()
  public setViewMode (viewMode: ViewMode) {
    this.viewMode = viewMode
  }

  public buttonClickedHandler (event) {
    this.buttonClicked.emit(event)
  }
  public componentWillLoad () {
    console.log('The component is about to be rendered')
  }
  public componentDidLoad () {
    console.log('The component has been rendered')
    setInterval(() => {
      this.date = Date.now()
    }, 1000)
  }
  public componentDidUpdate () {
    console.log('The component did update')
  }
  public componentWillUpdate () {
    console.log('The component will update')
  }
  public componentDidUnload () {
    console.log('The view has been removed from the DOM')
  }
  public render () {
    return (
      <div>
        <div>props: {this.getText()}</div>
        <p> state: {this.potato}</p>
        {this.todos && this.todos.map((todo) => <h3>{todo.name}</h3>)}
        <h4> {this.date}</h4>
        <button type='button' onClick={this.buttonClickedHandler}>Click me!</button>
      </div>
    )
  }

  private getText (): string {
    return `${this.first} ${this.last}`
  }
}
