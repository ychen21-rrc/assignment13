import React from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './components/Table';
import aurora from './images/aurora.jpg';
import sky from './images/sky.jpg';

function App() {
  return (
    <div style={{padding: 24, display: 'grid', gap: 16}}>
      <h1>Component Library Demo</h1>
      <Button onClick={()=>{}}>Primary</Button>
      <Button disabled onClick={()=>{}}>Disabled</Button>
      <Card>
        <Label htmlFor="name">Name</Label>
        <Text id="name" placeholder="Enter your name" />
        <Dropdown options={['One', 'Two', 'Three']} />
        <RadioButton name="choice" value="A" label="Option A" />
        <RadioButton name="choice" value="B" label="Option B" />
      </Card>
      
      <Table>
        <TableHeader>Header</TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>Footer</TableFooter>
      </Table>
      <Img alt="Sample" src={sky} />
      <HeroImage alt="Hero" src={aurora} heading="Hello" subheading="Responsive hero"/>
    </div>
  );
}

export default App;
