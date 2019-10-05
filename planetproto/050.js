/* While changes and assignments to object properties are not applied to their prototypes,
 * arrays/objets that are the properties of other objects don't because as expected.
 *
 * When such a property (array/object) is changed, it is changed directly. Therefore,
 * changing an array property of an object that was inherited from a prototype will
 * change the array itself, and therefore the prototype will also show these changes.
 */

// -> Create three objects: 'machine', 'robot' and 'vehicle'
// -> In the definition of machine set a property 'parts', set it to an 
//    empty array `[]`
// -> In the definition of machine set a property 'capabilities', set it to 
//    an empty object `{}`
const machine = { parts: [], capabilities: {} }, robot={}, vehicle={};

// -> Let's set the prototype of both robot and vehicle to machine
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> What is `robot.parts`?
claim(robot.parts, []);

// -> What is `vehicle.parts`?
claim(vehicle.parts, []);

// -> What is `robot.capabilities`?
claim(robot.capabilities, {});

// -> What is `vehicle.capabilities`?
claim(vehicle.capabilities, {});

// -> Let's add a 'core' part to robot
robot.parts.push('core');

// -> What is `robot.parts` now?
claim(robot.parts, ['core']);

// -> What is `vehicle.parts` now?
claim(vehicle.parts, ['core']);

// -> Let's set an ability to vehicle
vehicle.capabilities.fly = true;

// -> What is `robot.capabilities` now?
claim(robot.capabilities, {fly:true});

// -> What is `vehicle.capabilities` now?
claim(vehicle.capabilities, {fly:true});


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	vehicle:    vehicle,
	robot:    robot
}
