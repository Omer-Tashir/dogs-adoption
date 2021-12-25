import { DogBehaviorIssue } from "./dog-behavior-issue.enum";
import { DogHealthIssue } from "./dog-health-issue.enum";
import { DogLocation } from "./dog-location.enum";
import { DogSize } from "./dog-size.enum";
import { DogType } from "./dog-type.enum";

export class Dog {
    name!: string; // שם
    image!: string; // תמונה
    type!: DogType; // סוג
    currentLocation!: DogLocation; // מיקום הכלב
    pastLocation!: DogLocation; // עבר הכלב
    sex!: 'זכר' | 'נקבה';
    age!: number;
    size!: DogSize;
    healthIssues: DogHealthIssue[] = [];
    behaviorIssues: DogBehaviorIssue[] = [];
    description?: string; // תיאור חופשי
}