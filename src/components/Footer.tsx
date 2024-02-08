import { format } from "date-fns"
import { LogoMario } from '../SVGFiles';

const year = new Date();

export function Footer() {
    return (
        <div className="text-slate-500">
            <div className="h-px bg-slate-700 mt-20 mb-10" />
            <div className="flex justify-between content-center">
                <div className="text-sm">
                    &copy; All Rights Reserved to Mário Ponte - {format(year, "yyyy")}
                </div>
                <div className="flex gap-2">
                    <a href="https://marioponte.vercel.app" target="_Blank">
                        <LogoMario className='h-8 fill-slate-500 hover:fill-slate-400' />
                    </a>
                    <div className="text-xs w-64">
                        <a href="https://rocketseat.com.br" target="_Blank" className="hover:text-slate-400 pb-1">
                            Projeto desenvolvido no evento NLW Expert da plataforma Rocketseat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
