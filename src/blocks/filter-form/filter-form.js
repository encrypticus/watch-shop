import React from 'react';
import './filter-form.scss';
import Filter from '#comps/filter';
import { FilterItem } from '#comps/filter/filter';
import Slider from '#comps/slider';
import Checkbox from '#comps/checkbox';

const FilterForm = (props) => {
  return (
    <form className='filter-form'>
      <Filter>
        <FilterItem title='Стоимость'>
          <Slider/>
        </FilterItem>
      </Filter>

      <Filter>
        <FilterItem title='Бренд'>
          <Checkbox id='techne'>
            Techne
          </Checkbox>
          <Checkbox id='rado'>
            Rado
          </Checkbox>
          <Checkbox id='bvlgari'>
            Bvlgari
          </Checkbox>
          <Checkbox id='tissot'>
            Tissot
          </Checkbox>
          <Checkbox id='omega'>
            Omega
          </Checkbox>
          <Checkbox id='montblanc'>
            Montblanc
          </Checkbox>
        </FilterItem>

        <FilterItem title='Механизм'>
          <Checkbox id='quartz'>
            Кварц
          </Checkbox>
          <Checkbox id='mechanic'>
            Механика
          </Checkbox>
        </FilterItem>

        <FilterItem title='Материал'>
          <Checkbox id='plastic'>
            Пластик
          </Checkbox>

          <Checkbox id='still'>
            Металл
          </Checkbox>
        </FilterItem>

        <FilterItem title='Цвет'>
          <Checkbox id='black'>
            Черный
          </Checkbox>
          <Checkbox id='brown'>
            Коричневый
          </Checkbox>
          <Checkbox id='yellow'>
            Желтый
          </Checkbox>
          <Checkbox id='red'>
            Красный
          </Checkbox>
        </FilterItem>
      </Filter>
      <button className='filter-form__button' type='reset'>Сбросить фильтр</button>
    </form>
  );
};

export default FilterForm;