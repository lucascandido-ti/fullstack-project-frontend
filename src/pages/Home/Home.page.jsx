
import React, { useEffect, useState } from 'react';
import { Box, Container, Button,CircularProgress } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos, AttachFile, Close } from '@material-ui/icons';
import { BoxFlex, BoxGrid, BoxRegister, TitlePage, InputFile,
         Text, InputNameFile, BoxChart, HighChartWrapper, SlideControl} from './Home.styled.jsx';
import { TimeSeries } from '../../services/api/index.jsx'
import { formatDate, ifnull } from '../../services/formats/index.jsx';
import { CardGrid, CardItem } from '../../components/index.jsx';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function HomePage(props) {
    // 👎 O estado está bastante fragmentado e não necessariamente muito coeso
    const [name, setName] = useState('');
    const [attribuites_file, setFile] = useState(null);
    const [series, setSeries] = useState([]);
    const [selectSerie, setSelectSerie] =  useState({});
    const [dataSeries, setDataSerie] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        getSeries();
    }, [])

    // 👎 Poderia ter usado paginação para trazer os metadados das séries de dados
    const getSeries = async () => {
        try {
            setSeries([]);
            setDataSerie([]);
            const response = await TimeSeries.get();
            var data = response.data;

            if(data.length > 0){
                setSeries(data);
                getDataGrid(data[0]);
                setEmpty(false);
            }else{
                setEmpty(true);
            }


        } catch (error) {
            console.log(error)
        }
    }

    // 👎 Poderia fazer o cache de séries já conhecidas, usando um state, ou mesmo algum store
    const getDataGrid = async (serie) => {
        try {
            setSelectSerie(serie);
            const response = await TimeSeries.get(serie.fileid);
            var data = response.data;

            setDataSerie(data.data_series.map(item => {
                return item.value;
            }));

            setCategories(data.data_series.map(item => {
                return formatDate({
                    value: new Date(item.date),
                    format: 'DD/MM/YYYY hh:mm:ss'
                });
            }));
            

        } catch (error) {
            console.log(error)
        }
    }

    const setPointFocus = (e) =>{
        alert('click')
        console.log(e)
    }

    const submit = async () =>{
        setLoading(true);

        // 👎 Poderia ter utilizado alguma biblioteca de validação, ao invés de alerts (e.g. formik, react-hook-form)
        if(ifnull(name,'') == ''){
            alert('Por favor, preencher o nome do arquivo.');
            setLoading(false);
        }else if(document.getElementById("file-to-upload").files.length == 0){
            alert('É necessario selecionar um arquivo.');
            setLoading(false);
        }else{
            var formData = new FormData();
            formData.append("file", document.getElementById("file-to-upload").files[0]);
            formData.append("name", name);
            
            try {
                const response = await TimeSeries.post('/upload',formData);
                var data = response.data;
                
                setFile(null);
                setName('');
                getSeries('');
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error)
            }
        }
    }

    const handleChangeInputFile = (e) =>{
        e.preventDefault();
        var attribuites_file = document.getElementById("file-to-upload").files[0];
        if(attribuites_file.type != "text/csv"){
            alert('Formato de arquivo inválido. O arquivo teve ter o formato CSV.');
            setFile(null);
        }else{
            setFile(attribuites_file);
        }
    }

    const deleteSerie = async (item) =>{
        try {
            const response = await TimeSeries.delete(item.fileid);
            var data = response.data;
            getSeries();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        // 👎 Poderia ter separado um pouco melhor os componentes da `HomePage`
        <Container>
            <TitlePage>
                <h1>Desafio Full Stack</h1>
            </TitlePage>
            <BoxFlex>
                <BoxRegister>
                    <h1>Cadastro</h1>
                    <InputNameFile placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
                    <InputFile variant="text" component="label" >
                        <Text>
                            <AttachFile color='secondary' />
                            <p>
                                {attribuites_file == null && 'Selecione um arquivo CSV'}
                                {attribuites_file != null && `1 Arquivo selecionado: ${attribuites_file.name}`}
                            </p>
                        </Text>
                        {/* 👍 Boa sacada do input oculto */}
                        <input id="file-to-upload" hidden accept="text/csv" multiple type="file" onChange={(e)=>handleChangeInputFile(e)}/>
                    </InputFile>
                    <Button variant="contained" color="secondary" disabled={loading} onClick={()=>submit()}>
                        {loading && <CircularProgress size={14} />}
                        {!loading && 'Cadastrar'}
                    </Button>
                    
                </BoxRegister>
                <BoxGrid>
                    
                    {empty && <h1>Importe uma nova série de dados</h1>}
                    {!empty && <h1>Series de Dados</h1>}

                    <CardGrid>
                        <Box style={{width:'865px', height:'200px'}}>
                            {/* 👍 Animou a lista de séries de dados */}
                            <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={'230px'} naturalSlideHeight={'230px'} totalSlides={((series.length)/3)} infinite={true}>
                                <Slider>
                                    <Slide index={0}>
                                        <Box style={{display:'flex', flexDirection:'row'}}>
                                            {series.map((item,idx)=>{
                                                return <CardItem 
                                                            textAvatar={item.qtdpoint+' pts'}
                                                            title={item.name}
                                                            subtitle={formatDate({value: item.create_at, format: 'DD/MM/YYYY hh:mm:ss'})}
                                                            maxdate={formatDate({value: item.maxdate, format: 'DD/MM/YYYY hh:mm:ss'})}
                                                            mindate={formatDate({value: item.mindate, format: 'DD/MM/YYYY hh:mm:ss'})}
                                                            average={item.average}
                                                            clickFunction={()=>getDataGrid(item)}
                                                            deleteFunction={()=>deleteSerie(item)}
                                                        />
                                            })}
                                        </Box>
                                    </Slide>
                                </Slider>
                                <SlideControl>
                                    <ButtonBack style={{backgroundColor:'transparent', border:'none'}}>
                                        <ArrowBackIos color="secondary" />
                                    </ButtonBack>
                                    <ButtonNext style={{backgroundColor:'transparent', border:'none'}}>
                                        <ArrowForwardIos color="secondary" />
                                    </ButtonNext>
                                </SlideControl>
                            </CarouselProvider>
                        </Box>
                    </CardGrid>
                </BoxGrid>
            </BoxFlex>
            <BoxChart>
                {!empty ?
                    <HighChartWrapper
                        series={dataSeries}
                        categories={categories}
                        // 👎 Esta sintaxe está incorreta, e por isso o alert não funciona ao clicar em um ponto
                        // Deveria ser apenas `clickPoint={setPointFocus}` - este é o tipo de erro que o Typescript pegaria
                        clickPoint={()=>setPointFocus}
                        title={selectSerie.name}
                    />
                    :
                    <></>
                }
            </BoxChart>
            
            

        </Container>
    );
}