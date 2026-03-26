import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
         Transform your body with our high-intensity workout sessions designed for strength, endurance, and fat loss. Whether you're a beginner or a pro, our programs help you achieve real results faster.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         Explore our specialized bootcamp programs designed to push your limits, burn fat, and build strength with expert guidance.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Program</h4>
            <p>
              Build muscle and increase overall strength with intense weight training and resistance workouts.
            </p>
          </div>
          <div>
            <h4>HIIT Program</h4>
            <p>
              High-Intensity Interval Training to burn maximum calories in minimum time and boost endurance.
            </p>
          </div>
          <div>
            <h4>Fat Burn Program</h4>
            <p>
             Target stubborn fat with effective workouts focused on weight loss and body toning.
            </p>
          </div>
          <div>
            <h4>CrossFit Program</h4>
            <p>
             Functional training combining strength, cardio, and agility for full-body fitness.
            </p>
          </div>
          <div>
            <h4>Personal Coaching</h4>
            <p>
             Get personalized one-on-one coaching with expert trainers designed to help you achieve faster and more effective results.
            </p>
          </div>
          <div>
            <h4>Group Classes</h4>
            <p>
            Join dynamic group sessions that keep you motivated, build consistency, and make your fitness journey enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
