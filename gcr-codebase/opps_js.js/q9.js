
class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        let total = this.data.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user => {
            return `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`;
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

let output = "";

try {
    let fitness = new FitnessAnalytics(workoutData);

    output += "Active Users:\n";

    fitness.getActiveUsers().forEach(user => {
        output += `${user.user} - ${user.steps} steps\n`;
    });

    output += `\nAverage Calories: ${fitness.getAverageCalories()}\n`;

    output += "\nUser Summary:\n";

    fitness.getUserSummary().forEach(summary => {
        output += summary + "\n";
    });
} 
catch (error) {
    output = `Error: ${error.message}`;
}

document.getElementById("output").textContent = output;
