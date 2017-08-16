export class Score{
  id: string;
  categoryId: string;
  userId: string;
  value: number;

  constructor(pros: any) {
    this.id = pros._id;
    this.categoryId = pros.categoryId;
    this.userId = pros.userId;
    this.value = pros.value || 0;
  }
}
