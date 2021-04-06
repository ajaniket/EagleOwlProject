import { Card, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import CustomTable from '../common/customTable/customTable'
import { ContextMain } from "../common/ContextMain"
import { createTable } from "../common/Helperfunction"
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            value: 1,
        }
    }

    componentDidMount = () => {
        console.log("context", this.context.userData[0].results)

    }

    setAction = (obj) => {
        return (
            <>
                <Chip
                    label="Butter Chicken"
                    clickable
                    color="primary"
                    variant="outlined"
                />
                <Chip
                    className="mt-2 ml-2"
                    label={obj}
                    clickable
                    color="secondary"
                    variant="outlined"
                />
            </>
        )
    }

    conDate = (obj) => {
        let dateNew = new Date(obj).toDateString().split(' ').slice(1).join(' ');
        return (
            <Typography component="h4" className="td-font-status">{dateNew}</Typography>
        )
    }

    render() {
        const dataDump = createTable(this.context.userData[0].results, this.setAction, this.conDate)
        return (
            <div>
                <div className="row margin-card">
                    <div className="col-md-4  ">
                        <Card>
                            <h2 className="header-main">High margin Recipes</h2>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <h2 className="food-label">Ambur Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'95%'} value={95} className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'85%'} value={85} className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Butter Masala</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'79%'} value={79} className="circular-margin" />
                                    </div>
                                </div>
                            </div>

                        </Card>
                    </div>
                    <div className="col-md-4  ">
                        <Card>
                            <h2 className="header-main">Low margin Recipes</h2>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <h2 className="food-label">Ambur Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'15%'} value={15} color="secondary" className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'10%'} value={10} color="secondary" className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Butter Masala</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'19%'} value={19} color="secondary" className="circular-margin" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4  ">
                        <Card>
                            <h2 className="header-main">Top fluctuating Recipes</h2>
                            <div className="row mt-4">
                                <div className="col-md-4">
                                    <h2 className="food-label">Ambur Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'9%'} value={9} className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Biryani</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'12%'} value={12} className="circular-margin" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2 className="food-label">Paneer Butter Masala</h2>
                                    <div class="hlt">
                                    <CircularProgressbar text={'5%'} value={5} className="circular-margin" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <Card >
                    <CustomTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Last Updated', field: 'last_updated.date' },
                            { title: 'COGS%', field: 'cogs' },
                            { title: 'COST PRICE%', field: 'cost_price', },
                            { title: 'SALE PRICE%', field: 'sale_price', },
                            { title: 'CROSS MARGIN%', field: 'gross_margin', },
                            { title: 'TAGS / ACTIONS', field: 'manufacturing_outlet', }
                        ]}

                        data={dataDump}

                        options={{
                            sorting: true,
                            paginationType: "stepped",
                            paging: true,
                            selection: true,
                            filtering: false,
                            showTitle: false,
                            toolbar: true,
                            emptyRowsWhenPaging: false,
                            pageSize: 10,
                        }}
                    />

                </Card>
            </div>
        );
    }
}


MainPage.contextType = ContextMain;
export default MainPage;

