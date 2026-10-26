
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Check all required security conditions.
if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate the NOT operator.
if (!isOwnerInside || !isDoorLocked || !isWindowClosed || !isAlarmOn) {
    console.log("Warning: A security condition is not satisfied.");
}
