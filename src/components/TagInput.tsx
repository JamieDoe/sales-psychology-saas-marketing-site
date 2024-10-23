/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { useController, Control } from 'react-hook-form';

import { Input, Badge } from '@/components';

interface TagInputProps {
  name: string;
  control?: Control<any>;
  defaultValue?: string[];
}

export default function TagInput({
  name,
  control,
  defaultValue = [],
}: TagInputProps) {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  const onChange = control ? field.onChange : () => {};
  const value = control ? field.value : defaultValue;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      addTag(inputValue.trim());
    } else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
      removeTag(value.length - 1);
    }
  };

  const addTag = (tag: string) => {
    if (!value.includes(tag)) {
      onChange([...value, tag]);
      setInputValue('');
    }
  };

  const removeTag = (index: number) => {
    onChange(value.filter((_: string, i: number) => i !== index));
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((tag: string, index: number) => (
          <Badge key={index} variant="secondary" className="text-xs py-1 px-2">
            {tag}
            <button
              type="button"
              onClick={() => removeTag(index)}
              className="ml-1 focus:outline-none"
              aria-label={`Remove tag ${tag}`}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        type="text"
        placeholder="Type a tag and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="w-full"
      />
      <p className="text-sm text-muted-foreground mt-2">
        Press Enter to add a keyword, Backspace to remove the last keyword.
      </p>
    </div>
  );
}
