import { delay } from "@/data/mock-delay"

export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "member" | "viewer"
  status: "active" | "invited" | "suspended"
  createdAt: string
}

export const mockUsers: User[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@example.com", role: "admin", status: "active", createdAt: "2025-01-12" },
  { id: "2", name: "Alan Turing", email: "alan@example.com", role: "member", status: "active", createdAt: "2025-02-03" },
  { id: "3", name: "Grace Hopper", email: "grace@example.com", role: "admin", status: "active", createdAt: "2025-02-21" },
  { id: "4", name: "Katherine Johnson", email: "katherine@example.com", role: "member", status: "invited", createdAt: "2025-03-15" },
  { id: "5", name: "Linus Torvalds", email: "linus@example.com", role: "viewer", status: "suspended", createdAt: "2025-03-29" },
  { id: "6", name: "Margaret Hamilton", email: "margaret@example.com", role: "member", status: "active", createdAt: "2025-04-08" },
  { id: "7", name: "Dennis Ritchie", email: "dennis@example.com", role: "viewer", status: "active", createdAt: "2025-04-22" },
  { id: "8", name: "Barbara Liskov", email: "barbara@example.com", role: "admin", status: "active", createdAt: "2025-05-01" },
]

export function fetchUsers(): Promise<User[]> {
  return delay(mockUsers)
}
