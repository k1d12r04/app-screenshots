import { useDisplaySelectionStore } from '@/store/DisplaySelection';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DisplaySelection = () => {
  const { selectedDisplay, setSelectedDisplay } = useDisplaySelectionStore();

  const handleSelectChange = (value: string) => {
    setSelectedDisplay(value);
  };

  return (
    <div className="flex justify-center sm:justify-start mb-4 font-bold sm:ml-6 ">
      <Select onValueChange={handleSelectChange} value={selectedDisplay}>
        <SelectTrigger className="w-[180px] tracking-wide">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Display Options</SelectLabel>
            <SelectItem value="IPHONE_67">iPhone 6.7" Display</SelectItem>
            <SelectItem value="IPHONE_65">iPhone 6.5" Display</SelectItem>
            <SelectItem value="IPHONE_61">iPhone 6.1" Display</SelectItem>
            <SelectItem value="IPHONE_58">iPhone 5.8" Display</SelectItem>
            <SelectItem value="IPHONE_55">iPhone 5.5" Display</SelectItem>
            <SelectItem value="IPHONE_47">iPhone 4.7" Display</SelectItem>
            <SelectItem value="IPHONE_40">iPhone 4.0" Display</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DisplaySelection;
