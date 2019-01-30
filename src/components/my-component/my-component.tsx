import { Component, Method, State } from '@stencil/core'
import { PointOfInterest } from '../../utils/PointOfInterest'
import { ViewMode } from '../../utils/view-mode.enum'
/**
 * Component to render map
 *
 * @export
 * @class MyComponent
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  /**
   * The view mode of the map
   *
   * @type {ViewMode}
   * @memberof MyComponent
   */
  @State() public viewMode: ViewMode = 'List'

  /**
   * list of visited PointsOfInterest
   *
   * @type {PointOfInterest[]}
   * @memberof MyComponent
   */
  @State() public pointsOfInterest: PointOfInterest[] = []

  /**
   * Sets list of visited PointsOfInterest
   *
   * @param {{ key: boolean }} pointsOfInterest
   * @memberof MyComponent
   */
  @Method()
  public setPointsOfInterest (pointsOfInterest: PointOfInterest[]) {
    this.pointsOfInterest = pointsOfInterest
  }

  /**
   * Sets the view mode of the map
   *
   * @param {ViewMode} viewMode
   * @memberof MyComponent
   */
  @Method()
  public setViewMode (viewMode: ViewMode) {
    this.viewMode = viewMode
  }

  public render () {
    return (
      <div>
       <h1> Hi </h1>
       <div>View Mode: {this.viewMode}</div>
       <div>Visited PointsOfInterest:
       {this.pointsOfInterest.map((poi) => {
         console.log(poi)
         return <div key={poi.id}>
        {poi.id}
       </div>
       })}
       </div>
      </div>
    )
  }
}
