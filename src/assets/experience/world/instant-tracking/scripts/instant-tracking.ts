declare var AR;

class World {
  tracker;
   instantTrackable;

  init() {
    this.tracker = new AR.InstantTracker({ deviceHeight: 1.0 });

    this.instantTrackable = new AR.InstantTrackable(this.tracker, {
      drawables: {
        cam: []
      },
      onTrackingPlaneClick: this.addModel
    });
  }

  addModel = (x, y) => {
    this.tracker.state = AR.InstantTrackerState.TRACKING;

    var model = new AR.Model("assets/wt3/transformers.wt3", {
      scale: {
        x: 0.003,
        y: 0.003,
        z: 0.003
      },
      rotate: {
        x: 180,
        y: 180
      },
      translate: {
        x: x,
        y: y
      }

    });

    var modelAnim = new AR.ModelAnimation(model, "Animation_00");
    modelAnim.start();

    this.instantTrackable.drawables.addCamDrawable(model);
  }
};

let world = new World();

world.init();
