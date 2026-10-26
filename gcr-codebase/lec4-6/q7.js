
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count the words in the feedback.
const words = feedback.trim().split(/\s+/);
const wordCount = words.length;

// Convert to lowercase to make keyword checks case-insensitive.
const lowerFeedback = feedback.toLowerCase();

// Check for negative keywords.
const hasNegativeFeedback =
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor");

// Display the result.
console.log(`Feedback: ${feedback}`);
console.log(`Word Count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
