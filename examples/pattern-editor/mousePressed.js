const MousePressed = function () {
  const { app } = window;
  const { RabbitEar } = window;

  if (app.tapLayer == null) { app.tapLayer = app.origami.svg.group(); }
  if (app.dragRect == null) { app.dragRect = []; }

  app.origami.svg.mousePressed = function (mouse) {
    app.nearest = app.origami.nearest(mouse);
    app.nearestPressed = app.nearest;
    switch (app.tapMode) {
      case "segment": break;
      case "point-to-point": break;
      case "bisect": break;
      case "pleat": break;
      case "perpendicular-to": break;
      case "rabbit-ear": break;
      case "kawasaki": break;
      case "mountain-valley":
        if (app.nearest.edge) {
          switch (app.nearest.edge.assignment) {
            case "B":
            case "b": break;
            case "V":
            case "v":
              app.origami.edges_assignment[app.nearest.edge.index] = "M";
              break;
            case "M":
            case "m":
            case "F":
            case "f":
            default:
              app.origami.edges_assignment[app.nearest.edge.index] = "V";
              break;
          }
          app.origami.svg.draw();
        }
        break;
      case "mark":
        if (app.nearest.edge) {
          switch (app.nearest.edge.assignment) {
            case "B":
            case "b": break;
            default:
              app.origami.edges_assignment[app.nearest.edge.index] = "F";
              break;
          }
          app.origami.svg.draw();
        }
        break;
      case "cut": break;
      case "remove-crease": break;
      case "select": break;
      case "view": break;
      case "graph": break;
      case "history": break;
      case "version": break;
      default: console.warn("need to implement " + app.tapMode);
    }
  };
};
