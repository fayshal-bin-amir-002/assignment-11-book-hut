import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const BookCategory = () => {
    return (
        <div className='my-8 md:my-14 lg:my-24'>
            <Tabs>
                <div className='text-center'>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookCategory;