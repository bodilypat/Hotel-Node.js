//src/modules/auth/auth.events.js
import EventEmitter from "events";

class AuthEvents extends EventEmitter {}

const authEvents = new AuthEvents();

authEvents.on("user.registered", (user) => {
    console.log(
        `New user registered: ${user.email}`
    );
});

authEvents.on("user.loggedIn", (user) => {
    console.log(
        `User logged in: ${user.email}`
    );
});

export default authEvents;

