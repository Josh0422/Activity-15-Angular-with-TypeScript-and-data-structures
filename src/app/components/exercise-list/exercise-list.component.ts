import { Component } from '@angular/core';


interface Exercise {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {

  exerciseList: Exercise[] = [
    { name: 'Push Up', quantity: 10 },
    { name: 'Squats', quantity: 15 },
    { name: 'Lunges', quantity: 12 },
    { name: 'Plank', quantity: 1 }
  ];


  newExerciseName: string = '';
  newExerciseQuantity: number | null = null;


  addExercise(): void {
    if (this.newExerciseName.trim() && this.newExerciseQuantity !== null) {
      const newExercise: Exercise = {
        name: this.newExerciseName.trim(),
        quantity: this.newExerciseQuantity
      };
      this.exerciseList.push(newExercise);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newExerciseName = '';
    this.newExerciseQuantity = null;
  }


  removeExercise(index: number): void {
    this.exerciseList.splice(index, 1);
  }


  clearAllExercises(): void {
    this.exerciseList = [];
  }


  searchExercise(keyword: string): Exercise[] {
    return this.exerciseList.filter(exercise =>
      exercise.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
