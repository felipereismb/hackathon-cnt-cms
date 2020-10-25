import React from 'react';
import { connect } from 'react-redux';

import CountUp from 'react-countup';
import { Row, Col, CardBody, Card } from 'reactstrap';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Components
import Header from '~/components/header/Header';

import Slider from 'react-slick';
import Sticky from 'react-stickynode';
import { Pie } from 'react-chartjs-2';

// Images
import rodo1 from '~/assets/images/rodovias/rodo1.jpg';
import rodo2 from '~/assets/images/rodovias/rodo2.jpg';
import rodo3 from '~/assets/images/rodovias/rodo3.jpg';
import rodo4 from '~/assets/images/rodovias/rodo4.jpg';
import rodo5 from '~/assets/images/rodovias/rodo5.jpg';
import rodo6 from '~/assets/images/rodovias/rodo6.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const tipoRodoviaKleyson = [
  {
    name: 'Km 10',
    pistaDuplaComCanteiro: 1,
    pistaDuplaComBarreira: 0,
    pistaDuplaComFaixa: 6,
    pistaSimplesMaoUnica: 0,
    pistaSimplesMaoDupla: 3,
  },
  {
    name: 'Km 20',
    pistaDuplaComCanteiro: 5,
    pistaDuplaComBarreira: 0,
    pistaDuplaComFaixa: 0,
    pistaSimplesMaoUnica: 5,
    pistaSimplesMaoDupla: 0,
  },
  {
    name: 'Km 30',
    pistaDuplaComCanteiro: 0,
    pistaDuplaComBarreira: 5,
    pistaDuplaComFaixa: 4,
    pistaSimplesMaoUnica: 1,
    pistaSimplesMaoDupla: 0,
  },
  {
    name: 'Km 40',
    pistaDuplaComCanteiro: 2,
    pistaDuplaComBarreira: 2,
    pistaDuplaComFaixa: 2,
    pistaSimplesMaoUnica: 3,
    pistaSimplesMaoDupla: 1,
  },
];

const tipoRodoviaPaulo = [
  {
    name: 'Km 10',
    pistaDuplaComCanteiro: 1,
    pistaDuplaComBarreira: 0,
    pistaDuplaComFaixa: 6,
    pistaSimplesMaoUnica: 0,
    pistaSimplesMaoDupla: 3,
  },
  {
    name: 'Km 20',
    pistaDuplaComCanteiro: 5,
    pistaDuplaComBarreira: 0,
    pistaDuplaComFaixa: 0,
    pistaSimplesMaoUnica: 5,
    pistaSimplesMaoDupla: 0,
  },
];

const tipoRodoviaFelipe = [
  {
    name: 'Km 10',
    pistaDuplaComCanteiro: 0,
    pistaDuplaComBarreira: 5,
    pistaDuplaComFaixa: 1,
    pistaSimplesMaoUnica: 1,
    pistaSimplesMaoDupla: 3,
  },
];

const conclusaoTrechoKleyson = {
  labels: ['concluido', 'em progresso', 'para fazer'],
  datasets: [
    {
      data: [4, 1],
      backgroundColor: ['#268E24', '#CAB923'],
    },
  ],
};

const conclusaoTrechoFelipe = {
  labels: ['concluido', 'em progresso', 'para fazer'],
  datasets: [
    {
      data: [2, 1, 4],
      backgroundColor: ['#268E24', '#CAB923', '#686868'],
    },
  ],
};

const conclusaoTrechoPaulo = {
  labels: ['concluido', 'em progresso', 'para fazer'],
  datasets: [
    {
      data: [1, 1, 5],
      backgroundColor: ['#268E24', '#CAB923', '#686868'],
    },
  ],
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Header title="Dashboards" subTitle="Dados das pesquisas em vigência" />

        <div className="p-3" style={{ marginTop: '-40px' }}>
          <Row className="m-0">
            {/* Kleyson */}
            <Col md="6" xl="4">
              <Sticky
                enabled
                top=".app-header"
                innerZ="12"
                activeClass="sticky-active-class"
              >
                <div className="card mb-3 widget-content bg-night-fade">
                  <div className="widget-content-wrapper text-primary">
                    <div className="widget-content-left">
                      <div className="widget-heading">
                        Pesquisa: Kleyson Morais
                      </div>
                      <div className="widget-subheading">Trecho 1</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-secondary">
                        <CountUp end={80} duration="10" />%
                      </div>
                    </div>
                  </div>
                </div>
              </Sticky>

              <Card className="main-card mb-3 pb-3 pt-3">
                <label className="text-primary pl-3">
                  Progressão de Km's no trecho
                </label>
                <Pie dataKey="value" data={conclusaoTrechoKleyson} />
              </Card>

              <Card className="main-card mb-3">
                <CardBody className="p-1 pt-2">
                  <Slider {...settings}>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo1} alt="rodo1" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo2} alt="rodo2" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo3} alt="rodo3" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo4} alt="rodo4" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo5} alt="rodo5" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo6} alt="rodo6" />
                      </div>
                    </div>
                  </Slider>
                </CardBody>
              </Card>

              <CardBody className="p-0">
                <div className="card  widget-chart widget-chart2 text-left">
                  <div className="widget-chat-wrapper-outer ">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title ml-2 font-size-lg text-muted mb-3">
                          Tipos de Rodovias
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget-chart-wrapper-lg"
                      style={{ marginLeft: '-30px' }}
                    >
                      <ResponsiveContainer>
                        <BarChart data={tipoRodoviaKleyson}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pistaDuplaComCanteiro" fill="#268E24" />
                          <Bar dataKey="pistaDuplaComBarreira" fill="#686868" />
                          <Bar dataKey="pistaDuplaComFaixa" fill="#CAB923" />
                          <Bar dataKey="pistaSimplesMaoUnica" fill="#E07B04" />
                          <Bar dataKey="pistaSimplesMaoDupla" fill="#4e8cf4" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Col>

            {/* Paulo */}
            <Col md="6" xl="4">
              <Sticky
                enabled
                top=".app-header"
                innerZ="12"
                activeClass="sticky-active-class"
              >
                <div className="card mb-3 widget-content bg-night-fade">
                  <div className="widget-content-wrapper text-primary">
                    <div className="widget-content-left">
                      <div className="widget-heading">
                        Pesquisa: Paulo Atavila
                      </div>
                      <div className="widget-subheading">Trecho 45</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-secondary">
                        <CountUp end={30} duration="10" />%
                      </div>
                    </div>
                  </div>
                </div>
              </Sticky>

              <Card className="main-card mb-3 pb-3 pt-3">
                <label className="text-primary pl-3">
                  Progressão de Km's no trecho
                </label>
                <Pie dataKey="value" data={conclusaoTrechoPaulo} />
              </Card>

              <Card className="main-card mb-3">
                <CardBody className="p-1 pt-2">
                  <Slider {...settings}>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo5} alt="rodo5" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo1} alt="rodo1" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo2} alt="rodo2" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo6} alt="rodo6" />
                      </div>
                    </div>
                  </Slider>
                </CardBody>
              </Card>

              <CardBody className="p-0">
                <div className="card  widget-chart widget-chart2 text-left">
                  <div className="widget-chat-wrapper-outer ">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title ml-2 font-size-lg text-muted mb-3">
                          Tipos de Rodovias
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget-chart-wrapper-lg"
                      style={{ marginLeft: '-30px' }}
                    >
                      <ResponsiveContainer>
                        <BarChart data={tipoRodoviaPaulo}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pistaDuplaComCanteiro" fill="#268E24" />
                          <Bar dataKey="pistaDuplaComBarreira" fill="#686868" />
                          <Bar dataKey="pistaDuplaComFaixa" fill="#CAB923" />
                          <Bar dataKey="pistaSimplesMaoUnica" fill="#E07B04" />
                          <Bar dataKey="pistaSimplesMaoDupla" fill="#4e8cf4" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Col>

            {/* Felipe Reis */}
            <Col md="6" xl="4">
              <Sticky
                enabled
                top=".app-header"
                innerZ="12"
                activeClass="sticky-active-class"
              >
                <div className="card mb-3 widget-content bg-night-fade">
                  <div className="widget-content-wrapper text-primary">
                    <div className="widget-content-left">
                      <div className="widget-heading">
                        Pesquisa: Felipe Reis
                      </div>
                      <div className="widget-subheading">Trecho 5</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-secondary">
                        <CountUp end={10} duration="0" />%
                      </div>
                    </div>
                  </div>
                </div>
              </Sticky>

              <Card className="main-card mb-3 pb-3 pt-3">
                <label className="text-primary pl-3">
                  Progressão de Km's no trecho
                </label>
                <Pie dataKey="value" data={conclusaoTrechoFelipe} />
              </Card>

              <Card className="main-card mb-3">
                <CardBody className="p-1 pt-2">
                  <Slider {...settings}>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo2} alt="rodo2" />
                      </div>
                    </div>
                    <div>
                      <div className="slider-item">
                        <img width="100%" src={rodo1} alt="rodo1" />
                      </div>
                    </div>
                  </Slider>
                </CardBody>
              </Card>

              <CardBody className="p-0">
                <div className="card  widget-chart widget-chart2 text-left">
                  <div className="widget-chat-wrapper-outer ">
                    <div className="widget-chart-content">
                      <div className="widget-chart-flex">
                        <div className="widget-title ml-2 font-size-lg text-muted mb-3">
                          Tipos de Rodovias
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget-chart-wrapper-lg"
                      style={{ marginLeft: '-30px' }}
                    >
                      <ResponsiveContainer>
                        <BarChart data={tipoRodoviaFelipe}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="pistaDuplaComCanteiro" fill="#268E24" />
                          <Bar dataKey="pistaDuplaComBarreira" fill="#686868" />
                          <Bar dataKey="pistaDuplaComFaixa" fill="#CAB923" />
                          <Bar dataKey="pistaSimplesMaoUnica" fill="#E07B04" />
                          <Bar dataKey="pistaSimplesMaoDupla" fill="#4e8cf4" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
