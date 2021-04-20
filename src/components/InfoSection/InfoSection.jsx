import React from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from './style'
import image1 from '../../images/1.svg'
import image2 from '../../images/2.svg'
import image3 from '../../images/3.svg'
import { useTranslation } from 'react-i18next'



const InfoSection = () => {
	const classes = useStyles()
        const { t } = useTranslation()
    return (
        <div className={classes.root} dir={t('infoSection.direction')}>
        <Grid container spacing={10} >
               <Grid item xs={12} lg={4}>
                       <img src={image1} className={classes.image}/>
                       <h3 className={classes.title}>{t('infoSection.easyHead')}</h3>
                       <p className={classes.description}>{t('infoSection.easyDesc')}</p>
               </Grid>
               <Grid item xs={12} lg={4}>
               <img src={image2} className={classes.image}/>
               <h3 className={classes.title}>{t('infoSection.intelligenceHead')}</h3>
                       <p className={classes.description}>{t('infoSection.intelligenceDesc')}</p>                
               </Grid>
               <Grid item xs={12} lg={4}>
               <img src={image3} className={classes.image}/>

               <h3 className={classes.title}>{t('infoSection.OutReachHead')}.</h3>
                       <p className={classes.description}>{t('infoSection.OutReachDesc')}</p>                
               </Grid>
        </Grid>
       </div>
    )
}

export default InfoSection
