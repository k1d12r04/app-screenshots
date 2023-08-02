import { useLanguageSelectionStore } from '@/store/LanguageSelection';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageSelection = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguageSelectionStore();

  const handleSelectChange = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="mb-4 justify-center sm:mb-0 flex sm:justify-end mx-6">
      <Select onValueChange={handleSelectChange} value={selectedLanguage}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            <SelectItem value="en">English (Primary)</SelectItem>
            <SelectItem value="tr">Turkish</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelection;
