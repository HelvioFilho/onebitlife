import React, { useEffect, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { useTheme } from 'styled-components';
import habitData from '../../../services/habitData';
import { Arrow } from './styles';
import arrowDown from '../../../assets/icons/arrowDropdown.png';

enum Habit {
  Mente = 'dataMind',
  Financeiro = 'dataMoney',
  Corpo = 'dataBody',
  Humor = 'dataFun',
}


interface SelectProps {
  habit: Habit;
  habitInput: (name: string) => void;
}

export function SelectHabit({ habit, habitInput }: SelectProps) {
  const [selected, setSelected] = useState(habit ? habit : "-");
  const [data, setData] = useState([]);
  const { colors } = useTheme();

  useEffect(() => {
    setData(habitData[habit])
    habitInput(habit ? habit : undefined);
  }, []);

  return (
    <SelectList
      setSelected={setSelected}
      data={data}
      search={false}
      onSelect={() => habitInput(selected)}
      placeholder={selected}
      boxStyles={{
        borderWidth: 1,
        borderColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 15
      }}
      inputStyles={{ color: colors.white }}
      dropdownStyles={{ borderWidth: 0 }}
      dropdownItemStyles={{
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        marginBottom: 15
      }}
      dropdownTextStyles={{ color: colors.gray }}
      arrowicon={
        <Arrow 
          source={arrowDown}
        />
      }
    />
  );
}