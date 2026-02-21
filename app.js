const workoutPlans = {
  leg: [
    { name: "Squats", sets: 4, reps: "8-10" },
    { name: "Leg Press", sets: 3, reps: "10-12" },
    { name: "Hamstring Curl", sets: 3, reps: "12-15" },
    { name: "Calf Raises", sets: 4, reps: "15-20" }
  ]
};

function loadWorkout(day){
  const container = document.getElementById("todayWorkout");
  container.innerHTML = "";

  workoutPlans[day].forEach(ex=>{
    container.innerHTML += `
      <div>
        <strong>${ex.name}</strong><br>
        ${ex.sets} sets × ${ex.reps} reps
      </div><br>
    `;
  });
}
