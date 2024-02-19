import { Check } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import Image from 'next/image'

type SelectItemProps = Select.SelectItemProps & {
  text: string
  img?: string
}

export function SelectItem({ text, img, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText className="flex items-center text-black dark:text-zinc-100">
        <div className="flex items-center gap-3 text-black dark:text-zinc-100">
          {img && (
            <Image
              src={img}
              alt={text}
              width={28}
              height={28}
              className="object-cover"
            />
          )}
          {text}
        </div>
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-400" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
