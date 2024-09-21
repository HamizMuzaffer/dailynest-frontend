import { SidebarComponent } from "@/components/ui/sidebar"
import { TaskManagerComponent } from "@/components/ui/task-manager"

const Dashboard = () => {
  return (
    <div className="flex">
      <SidebarComponent />
      <TaskManagerComponent />
    </div>
  )
}

export default Dashboard