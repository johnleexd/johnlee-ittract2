"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/common/Section"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { projectData } from "@/constant/project"

export type project_type = {
  link: string
  imageLink: string
  title: string
}

export function ProjectSection() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const itemsPerPage = 3

  // Filter projects by search term
  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  const displayedProjects = filteredProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  // Reset page when search changes 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <Section>
      <div className="mb-6">
        <InputGroup>
          <InputGroupInput
            id="inline-start-input"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearchChange} 
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center py-10 mx-auto">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((data, index) => (
            <Link href={data.link} key={index} target="_blank" className="items-center flex justify-center">
              <div className="group relative w-80  aspect-square flex items-center justify-center flex gap-10">
                <Image
                  src={data.imageLink}
                  alt="project image"
                  loading="eager"
                  fill
                  className="object-cover transition-all duration-500 lg:group-hover:blur-none blur-none md:blur-sm delay-200 ease-in-out"
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-xl text-[#e50913] w-full text-center lg:group-hover:hidden transition-all duration-2000 h-full items-center flex justify-center delay-500 ease-in-out hidden lg:flex">
                  {data.title}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center w-full text-muted-foreground">
            No projects found
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </Section>
  )
}