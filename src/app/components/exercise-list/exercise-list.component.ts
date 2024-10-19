import { Component } from '@angular/core';

// Interface para sa bawat ehersisyo
interface Exercise {
  name: string;    // Pangalan ng ehersisyo
  quantity: number; // Bilang ng sets o repetitions
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {
  // Listahan ng mga ehersisyo
  exerciseList: Exercise[] = [
    { name: 'Push Up', quantity: 10 },
    { name: 'Squats', quantity: 15 },
    { name: 'Lunges', quantity: 12 },
    { name: 'Plank', quantity: 1 } // Example ng exercise
  ];

  // Temporaryong variable para sa bagong exercise
  newExerciseName: string = '';
  newExerciseQuantity: number | null = null;

  // Method para magdagdag ng bagong exercise
  addExercise(): void {
    if (this.newExerciseName.trim() && this.newExerciseQuantity !== null) {
      const newExercise: Exercise = {
        name: this.newExerciseName.trim(),
        quantity: this.newExerciseQuantity
      };
      this.exerciseList.push(newExercise); // Idagdag sa array
      this.clearFields(); // I-clear ang input fields
    }
  }

  // Method para i-clear ang mga input fields
  clearFields(): void {
    this.newExerciseName = '';
    this.newExerciseQuantity = null;
  }

  // Method para alisin ang exercise batay sa index
  removeExercise(index: number): void {
    this.exerciseList.splice(index, 1); // Tanggalin ang exercise sa array
  }

  // Method para i-clear lahat ng exercise
  clearAllExercises(): void {
    this.exerciseList = [];
  }

  // Method para maghanap ng exercise batay sa keyword
  searchExercise(keyword: string): Exercise[] {
    return this.exerciseList.filter(exercise =>
      exercise.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
