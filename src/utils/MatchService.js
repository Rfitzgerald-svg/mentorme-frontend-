export function computeMatchScore(menteeAnswers, mentorAnswers) {
  let score = 0;

  for (let i = 0; i < Math.min(menteeAnswers.length, mentorAnswers.length); i++) {
    const menteeResponse = menteeAnswers[i]?.toLowerCase() || "";
    const mentorResponse = mentorAnswers[i]?.toLowerCase() || "";

    if (menteeResponse && mentorResponse) {
      if (menteeResponse.includes(mentorResponse) || mentorResponse.includes(menteeResponse)) {
        score += 10;
      } else if (menteeResponse.split(" ").some(word => mentorResponse.includes(word))) {
        score += 5;
      }
    }
  }

  return score;
}
