class StopEditor extends MarkingEditor {
  constructor(viewport, world) {
    //NOTE: targetSegments => world.laneGuides
    super(viewport, world, world.laneGuides);
  }

  createMarking(center, directionVector) {
    return new Stop(
      center,
      directionVector,
      this.world.roadWidth / 2,
      this.world.roadWidth / 2,
    );
  }
}
