import React from 'react'
import './Pin.scss'

export default class Pin extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    interact('.resize-drag')
      .draggable({
        onmove: window.dragMoveListener,
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
        },
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        // keep the edges inside the parent
        restrictEdges: {
          outer: 'parent',
          endOnly: true,
        },


        inertia: true,
      })
      .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width  = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
      });

  }

  render() {
    return <div className ="resize-container">
        <div className ="resize-drag">
        </div>
      </div>
  }

}
