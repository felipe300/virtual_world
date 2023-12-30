class CrossingEditor extends MarkingEditor {
  constructor(viewport, world) {
    //NOTE: targetSegments => world.graph.segments
    super(viewport, world, world.graph.segments);
  }

  createMarking(center, directionVector) {
    return new Crossing(
      center,
      directionVector,
      this.world.roadWidth,
      this.world.roadWidth / 2,
    );
  }
}
