// You are designing a simple robot system. each robot has a name and a batteryLevel. the robot should have a method charge() that increases the battery level by 20, but it cannot exceed 100.

function Robot (name, batteryLevel) {
    this.name = name
    this.batteryLevel = batteryLevel
}

Robot.prototype.charge = function () {
    this.batteryLevel = Math.min(this.batteryLevel + 20, 100)
}

