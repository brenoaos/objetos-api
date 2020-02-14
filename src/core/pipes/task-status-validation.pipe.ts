// import { PipeTransform, BadRequestException } from '@nestjs/common';
// import { TaskStatus } from '../task-status.enum';

// export class TaskStatusValidationPipe implements PipeTransform {
//     readonly allowedStatuses = [
//         TaskStatus.DONE,
//         TaskStatus.IN_PROCESS,
//         TaskStatus.OPEN,
//     ];

//     transform(value: any) {
//         value = value.toUpperCase();

//         if (!this.isStatusValid(value)) {
//             throw new BadRequestException(`"${value}" não é um status válido.`);
//         }

//         return value;
//     }

//     private isStatusValid(status: any) {
//         const idx = this.allowedStatuses.indexOf(status);
//         return idx !== -1;
//     }
// }
