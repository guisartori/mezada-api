import { inject, injectable } from 'tsyringe'

import { ICreateTaskHistoryDTO } from '../dtos/ICreateTaskHistoryDTO'
import { TaskHistory } from '../infra/typeorm/entities/TaskHistory'
import { ITasksHistoryRepository } from '../repositories/ITasksHistoryRepository'

@injectable()
class CreateTaskHistoryService {
	constructor(
		@inject('TasksHistoryRepository')
		private tasksHistoryRepository: ITasksHistoryRepository,
	) {}

	public async execute(data: ICreateTaskHistoryDTO): Promise<TaskHistory> {
		const taskHistory = await this.tasksHistoryRepository.create(data)

		return taskHistory
	}
}

export { CreateTaskHistoryService }
