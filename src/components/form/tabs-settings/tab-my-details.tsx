'use client'

import { Input } from '@/components/form/input'
import * as FileInput from '@/components/form/file-input'
import { Mail } from 'lucide-react'
import { Select } from '@/components/form/select'
import { SelectItem } from '@/components/form/select/select-item'
import { arrayTimezones } from '@/utils/array-timezones'
import { Editor } from '@/components/form/editor'
import { Button } from '@/components/form/button'

export function TabMyDetails() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 md:flex-row md:items-center md:justify-between dark:border-zinc-600">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal info
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-300">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="space-x-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <form
        id="settings"
        className="mt-4 flex w-full flex-col gap-5 divide-y divide-zinc-200 md:mt-6 dark:divide-zinc-600"
      >
        <div className="grid-cols-form gap-3 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>
          <div className="flex grid-cols-2 flex-col gap-4 md:grid md:gap-6">
            <Input.Root>
              <Input.Control id="firstName" placeholder="First name" />
            </Input.Root>
            <Input.Root>
              <Input.Control placeholder="Last name" />
            </Input.Root>
          </div>
        </div>

        <div className="grid-cols-form gap-3 pt-5 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email Address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-400" />
            </Input.Prefix>
            <Input.Control id="email" placeholder="Your email" />
          </Input.Root>
        </div>

        <div className="grid-cols-form gap-3 pt-4 md:grid md:pt-5 2xl:grid-cols-form-xl">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
          >
            Your photo
            <span className="mt-0.5 block text-xs font-normal text-zinc-500 dark:text-zinc-300">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="mt-4 flex flex-col items-center gap-5 md:flex-row md:items-start">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid-cols-form gap-3 pt-5 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="role"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" placeholder="Your role" />
          </Input.Root>
        </div>

        <div className="grid-cols-form gap-3 pt-5 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Country
          </label>
          <Select placeholder="Select a country...">
            <SelectItem text="Brazil" value="br" img="/brazil.png" />
            <SelectItem text="United State" value="us" img="/usa.png" />
          </Select>
        </div>

        <div className="grid-cols-form gap-3 pt-5 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone
          </label>
          <Select placeholder="Select a country...">
            {arrayTimezones.map(({ name, value }) => (
              <SelectItem text={name} value={value} key={value} />
            ))}
          </Select>
        </div>

        <div className="hidden grid-cols-form gap-3 pt-5 md:visible md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="bio"
            className="block pb-4 text-sm font-medium text-zinc-700 md:pb-0 dark:text-zinc-100"
          >
            Bio
            <span className="mt-0.5 block text-xs font-normal text-zinc-500 dark:text-zinc-300">
              Write a short introduction.
            </span>
          </label>
          <Editor />
        </div>

        <div className="grid-cols-form gap-3 pt-5 md:grid 2xl:grid-cols-form-xl">
          <label
            htmlFor="portfolio"
            className="mb-4 block text-sm font-medium text-zinc-700 md:mb-0 dark:text-zinc-100"
          >
            Portfolio projects
            <span className="mt-0.5 block text-xs font-normal text-zinc-500 dark:text-zinc-300">
              Share a few snippets of your work.
            </span>
          </label>
          <div>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
        </div>

        <div className="flex items-center justify-end pt-8">
          <div className="space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
